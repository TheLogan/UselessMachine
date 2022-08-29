

export default class Servo {
  servo
  servoType = "";
  sId

  constructor(sId: "B14" | "B15", startPos: number) {
    // this.servo = require("servo").connect(sId, { range: 2 });
    this.servo = this.connect(sId, { range: 2 });
    this.sId = sId;
  }

  moveTo = (deg: number, ms: number = 1000) => {
    this.servo.move(deg, ms, () => { }, { soft: false });
  }

  connect(pin: any, options: any) {
    var interval: any, currentPos: any;
    var offs = 1, mul = 1;
    if (options && options.range) {
      mul = options.range;
      offs = 1.5 - (mul / 2);
    }
    return {
      move: function (pos: any, time: any, callback: any, options: any) {
        if (typeof time === 'function') {
          callback = time; time = undefined;
        }
        if (typeof time !== 'number') time = 1000;

        var amt = 0;
        if (currentPos === undefined) currentPos = pos;
        if (interval) clearInterval(interval);
        var initial = currentPos;
        interval = setInterval(function () {
          currentPos = pos * amt + initial * (1 - amt);
          // @ts-ignore
          digitalPulse(pin, 1, offs + E.clip(currentPos, 0, 1) * mul);
          if (amt >= 1) {
            if ((options && options.soft !== false) || !options) {
              clearInterval(interval);
              interval = undefined;
            }
            if (callback) callback();
          } else {
            amt += 1000.0 / (20 * time);
          }
        }, 20);
      }
    };
  };


}

