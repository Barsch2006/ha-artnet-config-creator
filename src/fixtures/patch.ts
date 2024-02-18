import {
  CWWW,
  Fixture,
  MHX200,
  MHZ1915,
  PAR64,
  SingleChannel,
  W648,
} from "./types";

const patchArray: Fixture[] = [
  // 24 SingleChannel
  new SingleChannel(1),
  new SingleChannel(2),
  new SingleChannel(3),
  new SingleChannel(4),
  new SingleChannel(5),
  new SingleChannel(6),
  new SingleChannel(7),
  new SingleChannel(8),
  new SingleChannel(9),
  new SingleChannel(10),
  new SingleChannel(11),
  new SingleChannel(12),
  new SingleChannel(13),
  new SingleChannel(14),
  new SingleChannel(15),
  new SingleChannel(16),
  new SingleChannel(17),
  new SingleChannel(18),
  new SingleChannel(19),
  new SingleChannel(20),
  new SingleChannel(21),
  new SingleChannel(22),
  new SingleChannel(23),
  new SingleChannel(24),
  // 2 MHX200
  new MHX200(25),
  new MHX200(41),
  // 2 MHZ1915
  new MHZ1915(134),
  new MHZ1915(61),
  // 5 W648
  new W648(200),
  new W648(206),
  new W648(212),
  new W648(218),
  new W648(224),
  // 2 CWWW
  new CWWW(105),
  new CWWW(100),
  // 10 PAR64
  new PAR64(150),
  new PAR64(158),
  new PAR64(166),
  new PAR64(174),
  new PAR64(182),
  new PAR64(190),
  new PAR64(246),
  new PAR64(230),
  new PAR64(238),
  new PAR64(254),
];

export default patchArray;
