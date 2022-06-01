import { lerp } from "./utils";

export default class Servo {
  servo
  servoType = "";
  sId

  constructor(sId: "B14" | "B15", startPos: number) {
    this.servo = require("servo").connect(sId, { range: 2 });
    this.sId = sId;
  }

  moveTo = (deg: number, ms: number = 1000) => {
    const deg2 = 0.2 + (0.2 - 0.09)/(0.9 - 0.7) * (deg - 0.9);

    this.servo.move(deg2, ms, () => {
      analogWrite(this.sId, (deg) / 50.0, { freq: 20, soft: false });
    });
  }
}

