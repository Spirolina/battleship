import Dom from './Dom';
import Gameboard from './factories/Gameboard';
import Player from './factories/Player';

export default class Gamecontroller {
  constructor() {
    this.playerBoard = new Gameboard();
    this.AIBoard = new Gameboard();
    this.players = ['', new Player('AI')];
  }

  init() {
    this.players[1].createAiSets();
    Dom.init();
    Dom.getNick(this);
    this.AIBoard.randomEnemyboard();
  }
}
