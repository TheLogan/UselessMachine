import Servo from "./Servo";
// Outside 0.95
// Inside 0.2
export default class Finger extends Servo {
  constructor() {
    super("B14", 1);
    this.servoType = "Finger";
  }

  out = (ms: number = 1000) => {
    this.moveTo(2.5, ms); // 2.5 / 1
  }
  in = (ms: number = 1000) => { 
    this.moveTo(1, ms); // 1 / 0.24
  }
}