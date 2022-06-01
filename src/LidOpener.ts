import Servo from "./Servo";
// Lid closed = 1.2
// Lid open = 0.8

export class LidOpener extends Servo {

  constructor() {
    super("B15", 0.9);
  }

  open = (ms: number = 1000) => {
    this.moveTo(0.7, ms); // 0.7 / 0.09
  }

  close = (ms: number = 1000) => {
    this.moveTo(0.9, ms); // 0.9 / 0.2
  }
}