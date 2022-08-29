import Servo from "./Servo";

const servo = new Servo('B14', 0);

console.log("machine ready");
let interval: NodeJS.Timer;

function pingpong() {
  let time = 0;
  interval = setInterval(() => {
    if (servo == null) return;
    time += 200;
    // let val = Math.sin(time * 2 * Math.PI);
    let val = 0.35 + Math.sin(time * 0.0004) * 0.1;
    console.log('val', val);
    servo.moveTo(val);
  }, 200);
}

function stopInterval() {
  if (interval == null) return;
  clearInterval(interval);
  servo.moveTo(0.5);
}

function moveRandom() {
  interval = setInterval(() => {
    if (servo == null) return;
    let val = Math.random() * 0.4 + 0.3;
    // convert from 0-1 to 0.3-0.7
    // let val = 0.5;
    servo.moveTo(val);
  }, 2000);
}