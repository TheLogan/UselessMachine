import Finger from "./Finger";
import { LidOpener } from "./LidOpener";
import Servo from "./Servo";
import SimpleReaction from "./R_Simple";
import AngryReaction from "./R_Angry";
import HesitantReaction from "./R_Hesitant";

let gameState: 'reacting' | 'idle' = 'idle';
const switchPin = "B5";
const finger = new Finger();
const lidOpener = new LidOpener();

pinMode(switchPin, 'input_pullup');
const simple = new SimpleReaction(switchPin, lidOpener, finger, () => gameState = 'idle');
const angry = new AngryReaction(switchPin, lidOpener, finger, () => gameState = 'idle');
const hesitant = new HesitantReaction(switchPin, lidOpener, finger, () => gameState = 'idle');

const gameLoop = () => {
  const switchVal = !digitalRead(switchPin);

  if (switchVal && gameState === 'idle') { 
    gameState = "reacting";
    let rand = Math.random();
    if( rand < 0.5) {
      console.log('simple reaction');
      
      simple.runReaction();
    }else if(rand < 0.8) {
      console.log('hesitant reaction');
      
      hesitant.runReaction();
    } else {
      console.log('angry reaction');
      
      angry.runReaction();
    }
  }
}



// if button is flipped, make the servo "tongue" flipped it again.
// Two servos, one for "tongue" and one for mouth open.

setInterval(gameLoop, 1000);

console.log("machine ready");