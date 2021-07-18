export default class Player {
  constructor(nick) {
    this.nick = nick;
    this.turnStatus = false;
    this.winStatus = false;
  }

  createAiSets() {
    let boxes = [];

    for (let j = 0; j < 9; j++) {
      for (let k = 0; k < 9; k++) {
        boxes.push([j, k]);
      }
    }

    this.AiSets = boxes;
  }

  giveTurn() {
    this.turnStatus = true;
  }

  takeTurn() {
    this.turnStatus = false;
  }
}
