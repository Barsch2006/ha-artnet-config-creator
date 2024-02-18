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

type YAMLChannel = `    - channel: ${number}
      name: ${string}_${number}_${string}
      type: dimmer
      default_level: ${number}`;

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
  toYAML(): YAMLChannel[] {
    // get all channel names
    const channelNames = Object.keys(this.channels);
    // create YAMLChannel object for each channel
    return channelNames.map((name, index): YAMLChannel => {
      return `    - channel: ${this.startDMX + index}
      name: ${this.type}_${this.startDMX}_${name}
      type: dimmer
      default_level: ${this.channels[name]}`;
    });
  }
}

class SingleChannel extends Fixture implements ISingleChannel {
  channels = {
    dimmer: 0,
  };

  constructor(startDMX: number) {
    super(startDMX, "SingleChannel");
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
