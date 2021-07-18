import './style.css';
import Gamecontroller from './Gamecontroller';

export default function init() {
  const myGame = new Gamecontroller();
  myGame.init();
}

init();
