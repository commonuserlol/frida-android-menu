# Attention
I don't want anything to do with java anymore because a) frida doesn't always work correctly and b) it debugs horribly. I'm reuploading this project because I had the idea to rewrite it and make it better but I just broke everything xD. It will also be marked as archived for the reasons described above. Don't worry, you can always fork it and add your own improvements :D

## Overview
A [Frida](https://frida.re) module to create custom floating menu on Android.

## Features
* Frida Integration: no need to compile the code and then inject it every time as you did with a completely Java menu
* Zero-knowledge about JNI: this project uses frida's convenient api instead of JNI
* Ready-to-use wrappers: even if you don’t know anything about Java, the project already includes wrappers for the Java API
* Highly customizable: ready-made layouts/configs available or create your own

## Usage
Please refer to source code.

## Troubleshooting
Through a very unstable Java bridge (on which this works), we cannot guarantee that everything will work. Please, prefer roms with non/slightly modified ART code (AOSP forks mainly)<br>***MIUI, ColorOS and other OEM roms MAY work incorrect or won't work at all***

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License
This project is licensed under the GNU General Public License v3.0.

## Acknowledgments
[Android-Mod-Menu](https://github.com/LGLTeam/Android-Mod-Menu/) - lgl layout java source<br>
[frida-il2cpp-bridge](https://github.com/vfsfitvnm/frida-il2cpp-bridge) - internal helpers (lazy, decorate, ...)
