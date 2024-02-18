# hass-artnet - lights configuration creator for Home Assistant

This algorythm creates an `lights.yaml` the hass-artnet addon for home assistant needs https://github.com/Breina/ha-artnet-led.
It's a simple typescript script that uses the in the `/src/fixtures/types.ts` defined fixture types and the in the `/src/fixtures/patch.ts` defined patch-array to create the `output/lights.yaml` file by using the `node:fs` module.
You can import the configuration from the `output/lights.yaml` file into your home assistant configuration by importing it in your `configuration.yaml` file.

Tested on Node.js v20.10.0
