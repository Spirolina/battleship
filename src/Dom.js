import footer from './components/footer';
import header from './components/header';
import gameContainer from './components/gameContainer';
import contentPlace from './components/contentPlace';
import startGameScreen from './components/startGameScreen';
import Gameboard from './factories/Gameboard';
import Player from './factories/Player';
import aiTurn from './ai';
import init from '.';

export default class Dom {
  constructor() {
    this.playerBoard = [];
    this.AIBoard = [];
  }

  static renderBoard(board) {
    let boardContainer = document.createElement('div');
    boardContainer.classList.add('boardContainer');
    let html = '';
    board.board.forEach((row) => {
      row.forEach((box) => {
        let content = '';

        if (box.hitStatus === true) content = 'h';
        if (box.ship) content = 's';
        if (box.ship && box.hitStatus === true) content = 'hittedShip';
        if (box.ship) {
          if (box.position.direction === 'horizontal') content += ' horizontal';
          if (box.position.direction === 'vertical') content += ' vertical';
        }

        html += `<div class = "box ${content}">   </div>`;
      });
    });
    return html;
  }

  static renderEnemyBoard(board) {
    let boardContainer = document.createElement('div');
    boardContainer.classList.add('boardContainer');
    let html = '';
    board.board.forEach((row) => {
      row.forEach((box) => {
        let content = '';
        if (box.hitStatus === true) content = 'h';
        if (box.ship && box.hitStatus === true) content = 'hittedShip';
        if (box.ship) {
          if (box.ship.isSunkStatus === true) content = 'sunkShip';
        }
        html += `<div class = "box ${content}">   </div>`;
      });
    });
    return html;
  }

  static renderBoardAppend(gameCtrl, winStatus) {
    const gameboardContainer = document.querySelector('.gameboardContainer');
    gameboardContainer.innerHTML = this.renderBoard(gameCtrl.playerBoard);
    if (!winStatus) {
      this.setEventHandlers(gameCtrl);
    }
  }

  static renderEnemyBoardAppend(gameCtrl) {
    const content = document.querySelector('.contentPlace');
    const enemyBoard = document.querySelector('.gameboardEnemy');
    if (enemyBoard) enemyBoard.remove();
    const html = `<div class="gameboardEnemy"> ${this.renderEnemyBoard(gameCtrl.AIBoard)}  </div>`;
    content.innerHTML += html;
    gameCtrl.players[0].takeTurn();
  }

  static setEventHandlers(gameCtrl) {
    try {
      const boxes = document.querySelectorAll('.gameboardEnemy .box');
      boxes.forEach((box, index) => box.addEventListener('click', () => {
        const y = parseInt((index / 9), 10);
        const x = index - (y * 9);
        gameCtrl.AIBoard.receiveAttackShip(x, y);
        let winner = Gameboard.controlWinner(gameCtrl.playerBoard, gameCtrl.AIBoard);

        aiTurn(gameCtrl);
        winner = Gameboard.controlWinner(gameCtrl.playerBoard, gameCtrl.AIBoard);

        this.renderEnemyBoardAppend(gameCtrl, winner);
        this.renderBoardAppend(gameCtrl, winner);
        if (winner) {
          console.log(winner);
          const content = document.querySelector('.contentPlace');
          const winBox = document.createElement('div');
          winBox.classList.add('winBox');

          const btn = document.createElement('button');
          btn.addEventListener('click', () => {
            content.innerHTML = '';
            init();
          });
          btn.innerText = 'play again';
          winBox.innerHTML += `${winner}`;
          winBox.appendChild(btn);

          content.appendChild(winBox);
        }
      }));
    } catch {
      this.setEventHandlers(gameCtrl);
    }
  }

  static startGame(gameCtrl) {
    this.renderBoardAppend(gameCtrl);
    this.renderEnemyBoardAppend(gameCtrl);
    this.setEventHandlers(gameCtrl);
  }

  static randomButton(gameCtrl) {
    // eslint-disable-next-line no-constant-condition
    while (1) {
      gameCtrl.playerBoard.randomShipPlace();
      Dom.renderBoardAppend(gameCtrl);
      if (gameCtrl.playerBoard.shipsPlaced.length === 4) {
        const content = document.querySelector('.contentPlace');
        const oldBtn = document.querySelector('.randomBtn');
        oldBtn.remove();
        content.innerHTML += '<button class="goGame"> Go Game! </button>';
        const newBtn = document.querySelector('.goGame');
        newBtn.addEventListener('click', () => {
          newBtn.remove();
          this.startGame(gameCtrl);
        });
        break;
      }
    }
  }

  static startBoard(gameCtrl) {
    const content = document.querySelector('.contentPlace');
    content.innerHTML = gameContainer();
    this.playerBoard = new Gameboard();
    Dom.renderBoardAppend(gameCtrl);
    content.innerHTML += '<button class="randomBtn"> RANDOM SHIPS </button>';
    const randomBtn = document.querySelector('.randomBtn');
    randomBtn.addEventListener('click', () => Dom.randomButton(gameCtrl));
  }

  static getNick(gameCtrl) {
    const input = document.querySelector('.nickInput');
    const btn = document.querySelector('.go');
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const { value } = input;
      // eslint-disable-next-line no-param-reassign
      gameCtrl.players[0] = new Player(value);
      Dom.startBoard(gameCtrl);
    });
  }

  static init() {
    document.body.innerHTML += header();
    document.body.innerHTML += contentPlace();
    document.body.innerHTML += footer();

    const content = document.querySelector('.contentPlace');
    content.innerHTML += startGameScreen();
  }
}
