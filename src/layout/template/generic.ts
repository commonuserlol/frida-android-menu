namespace Menu {
    export namespace Template {
        export abstract class GenericTemplate {
            /** Menu props */
            params: Java.Wrapper; // TODO: Maybe i should add wrapper for *params
            /** Template as layout */
            me: Layout;
            /** Icon holder */
            icon: Icon;
            /** Proxy layout for scrolling feature */
            proxy: Layout;
            /** Main layout for widgets */
            layout: Layout;
            /** Layout for title and settings */
            titleLayout: Layout;
            /** Title TextView */
            title: TextView;
            /** Subtitle TextView */
            subtitle: TextView;
            /** Layout for hide/kill and close buttons */
            buttonLayout: Layout;
            /** Hide/kill button */
            hide: Button;
            /** Close button */
            close: Button;

            constructor() {}

            abstract initializeParams(): void;

            /** Initializes own layout */
            abstract initializeLayout(): void;

            /** Initializes icon */
            abstract initializeIcon(value: string, type: "Normal" | "Web"): void;

            abstract initializeProxy(): void;

            abstract initializeMainLayout(): void;

            abstract initializeButtons(): void;

            /** Adds everything needed from template */
            abstract handleAdd(add: (view: View, layout?: Java.Wrapper | View) => void): void;
        }
    }
}