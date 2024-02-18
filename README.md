# ha-artnet-led configuration creator for home assistant

This algorythm takes a list of classes/ objects (typescript) and converts it into a `light.yaml`-file which then the [HASC-integration](https://github.com/Breina/ha-artnet-led) uses to control the lights in home assistant.

## Usage

1. Change the classes in `src/fixtures` to match with your setup. 
2. Run `tsc` to transpile your code
3. Run the program with `node .`

In the `output`-directory you will find the `light.yaml`-file which you can import in your `configuration.yaml` file.

Tested on Node.js v20.10.0
