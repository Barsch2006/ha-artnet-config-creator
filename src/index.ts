import patchArray from "./fixtures/patch";
import { Fixture, YAMLChannel } from "./fixtures/types";
import { mkdirSync, writeFileSync, existsSync } from "fs";

// sort the patchArray by startDMX
const sortedPatchArray: Fixture[] = patchArray.sort(
  (a, b) => a.startDMX - b.startDMX
);

const startYAML = `light:
- platform: artnet_led
  host: 192.168.1.55
  max_fps: 25 # Max 40 per second
  # refresh_every: 0
  node_type: artnet-direct
  universes:
    0:
      send_partial_universe: True
      output_correction: linear
      devices:
`;

const devicesYAML: YAMLChannel[] = sortedPatchArray
  .map((fixture) => {
    return fixture.toYAML();
  })
  .flat();

// concat the startYAML and devicesYAML
const finalYAML = `${startYAML} ${devicesYAML.join("\n")}`;
if (!existsSync("output")) mkdirSync("output");
writeFileSync("output/light.yaml", finalYAML);
