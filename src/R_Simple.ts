import Reaction from "./Reaction";

export default class SimpleReaction extends Reaction {
  override runReaction = () => {
    this.stepOne();
  };

  stepOne = () => {
    this.lidOpener.open();
    setTimeout(() => {
      this.finger.out();
      setTimeout(() => {
        this.stepTwo();
      } ,500)
    }, 500)
  }

  stepTwo = () => {
    this.finger.in();
    setTimeout(() => {
      this.lidOpener.close();
      this.callback();
    }, 500);
  }
}