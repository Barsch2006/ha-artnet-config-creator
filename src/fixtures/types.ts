interface ICWWW {
  channels: {
    cw: number;
    ww: number;
    dimmer: number;
    strobe: number;
    colortemp: number;
  };
}

interface IMHX200 {
  channels: {
    pan: number;
    tilt: number;
    panFine: number;
    tiltFine: number;
    speed: number;
    color: number;
    shutter: number;
    dimmer: number;
    gobo1: number;
    gobo1Rotation: number;
    gobo2: number;
    focus: number;
    iris: number;
    prism: number;
    function: number;
    effect: number;
  };
}

interface IMHZ1915 {
  channels: {
    pan: number;
    tilt: number;
    speed: number;
    r: number;
    g: number;
    b: number;
    w: number;
    effect: number;
    effectSpeed: number;
    dimmer: number;
    shutter: number;
    zoom: number;
    functions: number;
    moveEffect: number;
  };
}

interface IPAR64 {
  channels: {
    r: number;
    g: number;
    b: number;
    w: number;
    cto: number;
    shutter: number;
    func: number;
    dimmer: number;
  };
}

interface IW648 {
  channels: {
    dimmer: number;
    shutter: number;
    r: number;
    g: number;
    b: number;
    function: number;
  };
}

interface ISingleChannel {
  channels: {
    dimmer: number;
  };
}

type FixtureType =
  | "SingleChannel"
  | "CWWW"
  | "MHX200"
  | "MHZ1915"
  | "PAR64"
  | "W648";
type YAMLChannelType = "dimmer" | "binary" | "rgb" | "rgbw" | "color_temp";
/**
 * @typedef {string} YAMLChannelName - The name of the channel
 * FixtureType_startDMX_channelsKey
 */
type YAMLChannelName = `${FixtureType}_${number}_${string}`;
type ChannelSize = "16bit" | "8bit";

type YAMLChannelDefault = `     - channel: ${number}
        name: ${YAMLChannelName}
        transition: 0
        type: ${YAMLChannelType}`;
type YAMLChannelExtended = `      - channel: ${number}
        name: ${YAMLChannelName}
        type: ${YAMLChannelType}
        transition: 0
        size: ${ChannelSize}`;
type YAMLChannel = YAMLChannelDefault | YAMLChannelExtended;

abstract class Fixture {
  startDMX: number;
  type: string;
  abstract channels: { [key: string]: number };

  constructor(startDMX: number, type: string) {
    this.startDMX = startDMX;
    this.type = type;
  }

  /**
   * @returns {YAMLChannel[]} - Returns an array of YAMLChannel objects (strings)
   */
  abstract toYAML(): YAMLChannel[];
}

class SingleChannel extends Fixture implements ISingleChannel {
  channels = {
    dimmer: 0,
  };

  constructor(startDMX: number) {
    super(startDMX, "SingleChannel");
  }

  toYAML(): YAMLChannel[] {
    return [
      `     - channel: ${this.startDMX}
        name: SingleChannel_${this.startDMX}_dimmer
        transition: 0
        type: binary`,
    ];
  }
}

class CWWW extends Fixture implements ICWWW {
  channels = {
    cw: 0,
    ww: 0,
    dimmer: 0,
    strobe: 0,
    colortemp: 0,
  };

  constructor(startDMX: number) {
    super(startDMX, "CWWW");
  }

  toYAML(): YAMLChannel[] {
    return [
      `     - channel: ${this.startDMX}
        name: CWWW_${this.startDMX}_cwww
        transition: 0
        type: color_temp`,
      `     - channel: ${this.startDMX + 2}
        name: CWWW_${this.startDMX}_dimmer
        transition: 0
        type: dimmer`,
      `     - channel: ${this.startDMX + 3}
        name: CWWW_${this.startDMX}_strobe
        transition: 0
        type: dimmer`,
      `     - channel: ${this.startDMX + 4}
        name: CWWW_${this.startDMX}_color_temp
        transition: 0
        type: dimmer`,
    ];
  }
}

class MHX200 extends Fixture implements IMHX200 {
  channels = {
    pan: 0,
    tilt: 0,
    panFine: 0,
    tiltFine: 0,
    speed: 0,
    color: 0,
    shutter: 0,
    dimmer: 0,
    gobo1: 0,
    gobo1Rotation: 0,
    gobo2: 0,
    focus: 0,
    iris: 0,
    prism: 0,
    function: 0,
    effect: 0,
  };

  constructor(startDMX: number) {
    super(startDMX, "MHX200");
  }

  toYAML(): YAMLChannel[] {
    return [
      `     - channel: ${this.startDMX}
        name: MHX200_${this.startDMX}_pan
        transition: 0
        type: dimmer`,
      `     - channel: ${this.startDMX + 1}
        name: MHX200_${this.startDMX}_tilt
        transition: 0
        type: dimmer`,
      `     - channel: ${this.startDMX + 2}
        name: MHX200_${this.startDMX}_pan_fine
        transition: 0
        type: dimmer`,
      `     - channel: ${this.startDMX + 3}
        name: MHX200_${this.startDMX}_tilt_fine
        transition: 0
        type: dimmer`,
      `     - channel: ${this.startDMX + 4}
        name: MHX200_${this.startDMX}_speed
        transition: 0
        type: dimmer`,
      `     - channel: ${this.startDMX + 5}
        name: MHX200_${this.startDMX}_color
        transition: 0
        type: dimmer`,  
      `     - channel: ${this.startDMX + 6}
        name: MHX200_${this.startDMX}_shutter
        transition: 0
        type: dimmer`,
      `     - channel: ${this.startDMX + 7}
        name: MHX200_${this.startDMX}_dimmer
        transition: 0
        type: dimmer`,
      `     - channel: ${this.startDMX + 8}
        name: MHX200_${this.startDMX}_gobo1
        transition: 0
        type: dimmer`,
      `     - channel: ${this.startDMX + 9}
        name: MHX200_${this.startDMX}_gobo1_rotation
        transition: 0
        type: dimmer`,
      `     - channel: ${this.startDMX + 10}
        name: MHX200_${this.startDMX}_gobo2
        transition: 0
        type: dimmer`,
      `     - channel: ${this.startDMX + 11}
        name: MHX200_${this.startDMX}_focus
        transition: 0
        type: dimmer`,
      `     - channel: ${this.startDMX + 12}
        name: MHX200_${this.startDMX}_iris
        transition: 0
        type: dimmer`,
      `     - channel: ${this.startDMX + 13}
        name: MHX200_${this.startDMX}_prism
        transition: 0
        type: dimmer`,  
      `     - channel: ${this.startDMX + 14}
        name: MHX200_${this.startDMX}_function
        transition: 0
        type: dimmer`,
      `     - channel: ${this.startDMX + 15}
        name: MHX200_${this.startDMX}_effect
        transition: 0
        type: dimmer`,
    ];
  }
}

class MHZ1915 extends Fixture implements IMHZ1915 {
  channels = {
    pan: 0,
    tilt: 0,
    speed: 0,
    r: 0,
    g: 0,
    b: 0,
    w: 0,
    effect: 0,
    effectSpeed: 0,
    dimmer: 0,
    shutter: 0,
    zoom: 0,
    functions: 0,
    moveEffect: 0,
  };

  constructor(startDMX: number) {
    super(startDMX, "MHZ1915");
  }

  toYAML(): YAMLChannel[] {
    return [
      `     - channel: ${this.startDMX}
        name: MHZ1915_${this.startDMX}_pan
        transition: 0
        type: dimmer`,
      `     - channel: ${this.startDMX + 1}
        name: MHZ1915_${this.startDMX}_tilt
        transition: 0
        type: dimmer`,
      `     - channel: ${this.startDMX + 2}
        name: MHZ1915_${this.startDMX}_speed
        transition: 0
        type: dimmer`,
      `     - channel: ${this.startDMX + 3}
        name: MHZ1915_${this.startDMX}_rgbw
        transition: 0
        type: rgbw`,
      `     - channel: ${this.startDMX + 7}
        name: MHZ1915_${this.startDMX}_effect
        transition: 0
        type: dimmer`,
      `     - channel: ${this.startDMX + 8}
        name: MHZ1915_${this.startDMX}_effect_speed
        transition: 0
        type: dimmer`,
      `     - channel: ${this.startDMX + 9}
        name: MHZ1915_${this.startDMX}_dimmer
        transition: 0
        type: dimmer`,
      `     - channel: ${this.startDMX + 10}
        name: MHZ1915_${this.startDMX}_shutter
        transition: 0
        type: dimmer`,
      `     - channel: ${this.startDMX + 11}
        name: MHZ1915_${this.startDMX}_zoom
        transition: 0
        type: dimmer`,
      `     - channel: ${this.startDMX + 12}
        name: MHZ1915_${this.startDMX}_functions
        transition: 0
        type: dimmer`,
      `     - channel: ${this.startDMX + 13}
        name: MHZ1915_${this.startDMX}_move_effect
        transition: 0
        type: dimmer`,
    ];
  }
}

class PAR64 extends Fixture implements IPAR64 {
  channels = {
    r: 0,
    g: 0,
    b: 0,
    w: 0,
    cto: 0,
    shutter: 0,
    func: 0,
    dimmer: 0,
  };

  constructor(startDMX: number) {
    super(startDMX, "PAR64");
  }

  toYAML(): YAMLChannel[] {
    return [
      `     - channel: ${this.startDMX}
        name: PAR64_${this.startDMX}_rgbw
        transition: 0
        type: rgbw`,  
      `     - channel: ${this.startDMX + 4}
        name: PAR64_${this.startDMX}_cto
        transition: 0
        type: dimmer`,
      `     - channel: ${this.startDMX + 5}
        name: PAR64_${this.startDMX}_shutter
        transition: 0
        type: dimmer`,
      `     - channel: ${this.startDMX + 6}
        name: PAR64_${this.startDMX}_func
        transition: 0
        type: binary`,
      `     - channel: ${this.startDMX + 7}
        name: PAR64_${this.startDMX}_dimmer
        transition: 0
        type: dimmer`,
    ];
  }
}

class W648 extends Fixture implements IW648 {
  channels = {
    dimmer: 0,
    shutter: 0,
    r: 0,
    g: 0,
    b: 0,
    function: 0,
  };

  constructor(startDMX: number) {
    super(startDMX, "W648");
  }

  toYAML(): YAMLChannel[] {
    return [  
      `     - channel: ${this.startDMX}
        name: W648_${this.startDMX}_dimmer
        transition: 0
        type: dimmer`,
      `     - channel: ${this.startDMX + 1}
        name: W648_${this.startDMX}_shutter
        transition: 0
        type: dimmer`,
      `     - channel: ${this.startDMX + 2}
        name: W648_${this.startDMX}_rgb
        transition: 0
        type: rgb`,
      `     - channel: ${this.startDMX + 5}
        name: W648_${this.startDMX}_function
        transition: 0
        type: binary`,
    ];
  }
}

export {
  ICWWW,
  IMHX200,
  IMHZ1915,
  IPAR64,
  IW648,
  ISingleChannel,
  YAMLChannel,
  Fixture,
  SingleChannel,
  CWWW,
  MHX200,
  MHZ1915,
  PAR64,
  W648,
};
