import Reaction from "./Reaction";

export default class HesitantReaction extends Reaction {
  override runReaction = () => {
    this.stepOne();
  };

  stepOne = () => {
    this.lidOpener.open();
    setTimeout(() => {
      this.finger.moveTo(1.8);
      setTimeout(() => {
        this.stepTwo();
      } ,500)
    }, 500)
  }
  
  stepTwo = () => {
    this.lidOpener.open();
    setTimeout(() => {
      this.finger.out();
      setTimeout(() => {
        this.stepThree();
      } ,500)
    }, 500)
  }

  stepThree = () => {
    this.finger.in();
    setTimeout(() => {
      this.lidOpener.close();
      this.callback();
    }, 500);
  }
}