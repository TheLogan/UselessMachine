import Finger from "./Finger";
import { LidOpener } from "./LidOpener";
import Servo from "./Servo";

export default class Reaction {
  switchPin;
  lidOpener;
  finger;
  callback;

  constructor(switchPin: string, lidOpener: LidOpener, finger: Finger, callback: () => void) {
    this.switchPin = switchPin;
    this.lidOpener = lidOpener;
    this.finger = finger;
    this.callback = callback;
  }

  runReaction = () => {}
}