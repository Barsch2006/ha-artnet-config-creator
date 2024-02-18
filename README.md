# hass-artnet - lights configuration creator for Home Assistant

This algorythm creates an `output.yaml` the hass-artnet addon for home assistant needs https://github.com/danielweidenauer/hass-artnet.
It's a simple typescript script that uses the in the `/src/fixtures/types.ts` defined fixture types and the in the `/src/fixtures/patch.ts` defined patch array to create the `output.yaml` file by using the `node:fs` module.

Tested on Node.js v20.10.0
