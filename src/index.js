import './style.css';
import Gamecontroller from './Gamecontroller';

export default function init() {
  const myGame = new Gamecontroller();
  document.body.innerHTML = '';
  myGame.init();
}

init();
