import patchArray from "./fixtures/patch";
import { Fixture, YAMLChannel } from "./fixtures/types";
import { mkdirSync, writeFileSync, existsSync } from "fs";

// sort the patchArray by startDMX
const sortedPatchArray: Fixture[] = patchArray.sort(
  (a, b) => a.startDMX - b.startDMX
);

const startYAML = `light:
- platform: artnet
  host: 255.255.255.255
  port: 6454
  dmx_channels: 512 
  default_level: 0
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
