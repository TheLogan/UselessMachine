import Reaction from "./Reaction";

export default class AngryReaction extends Reaction {
  override runReaction = () => {
    this.stepOne();
  };

  stepOne = () => {
    this.lidOpener.open(450);
    setTimeout(() => {
      this.lidOpener.close(150);
      this.stepTwo();
    }, 1000);
  }

  stepTwo = () => {
    setTimeout(() => {
      this.lidOpener.open(200);
      setTimeout(() => {
        this.lidOpener.close(200);
        setTimeout(() => {
          this.lidOpener.open(200);
          setTimeout(() => {
            this.lidOpener.close(200);
            setTimeout(() => {
              this.lidOpener.open(200);
              setTimeout(() => {
                this.lidOpener.close(200);
                this.stepThree();
              }, 250);
            }, 250);
          }, 250);
        }, 250);
      }, 250);
    }, 250);
  }

  stepThree = () => {
    setTimeout(() => {
      this.lidOpener.open();
      setTimeout(() => {
        this.finger.out();
        setTimeout(() => {
          this.stepFour();
        }, 500)
      }, 500)
    }, 500)
  }

  stepFour = () => {
    this.finger.in();
    setTimeout(() => {
      this.lidOpener.close();
      this.callback();
    }, 500);
  }
}