# hass-artnet - lights configuration creator for Home Assistant

This algorythm takes a list of classes and a patch array in typescript and puts it into a `light.yaml` file the HASC-integration https://github.com/Breina/ha-artnet-led uses to control your lights.

## Usage

Change the classes in `src/fixtures` to match your setup. Then run `tsc` and `node .`. In the `output` directory you will find the `light.yaml` file which you can import in your `configuration.yaml` file.

Tested on Node.js v20.10.0
