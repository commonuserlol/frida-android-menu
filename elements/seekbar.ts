import { Api } from "../api.js";
import { format, randomString } from "../utils.js";
import { Object } from "./object.js";
import { TextView } from "./textView.js";

/**
 * Wrapper for `SeekBar`
 *
 * @export
 * @class SeekBar
 * @typedef {SeekBar}
 * @extends {Object}
 */
export class SeekBar extends Object {
    public label: TextView;
    public unformattedText: String;

    /**
     * Creates an instance of SeekBar.
     *
     * @constructor
     * @param {Java.Wrapper} context
     * @param {string} text
     * @param {number} [progress=0]
     */
    constructor(context: Java.Wrapper, text: string, progress: number = 0) {
        super(context);
        this.instance = Api.SeekBar.$new(context);
        this.unformattedText = new String(text);
        this.label = new TextView(context, format(this.unformattedText, progress ?? 0));
        this.progress = progress;
    }
    /**
     * Gets max value
     *
     * @type {number}
     */
    get max(): number {
        return this.instance.getMax();
    }
    /**
     * Gets min value
     *
     * @type {number}
     */
    get min(): number {
        return this.instance.getMin();
    }
    /**
     * Gets progress
     *
     * @type {number}
     */
    get progress(): number {
        return this.instance.getProgress();
    }
    /**
     * Sets max value
     *
     * @type {number}
     */
    set max(max: number) {
        this.instance.setMax(max);
    }
    /**
     * Sets min value
     *
     * @type {number}
     */
    set min(min: number) {
        try {
            if (this.progress < min) {
                this.progress = min;
                this.instance.setMin(min);
            }
        }
        catch (e) {
            console.error(`App running on android lower than 8; set min value failed`);
        }
    }
    /**
     * Sets onSeekBarChangeListener callback
     *
     * @type {(progress: number) => void}
     */
    set onSeekBarChangeListener(callback: (progress: number) => void) {
        this.instance.setOnSeekBarChangeListener(Java.registerClass({
            name: randomString(35),
            implements: [Api.OnSeekBarChangeListener],
            methods: {
                onStartTrackingTouch: function(seekBar: Java.Wrapper) {

                },
                onStopTrackingTouch: function(seekBar: Java.Wrapper) {

                },
                onProgressChanged: (seekBar: Java.Wrapper, progress: number) => {
                    seekBar.setProgress(progress)
                    this.label.text = format(this.unformattedText, progress);
                    callback(progress);
                }
            }
        }).$new());
    }
    /**
     * Sets progress
     *
     * @type {number}
     */
    set progress(progress: number) {
        this.label.text = format(this.unformattedText, progress);
        this.instance.setProgress(progress);
    }
}