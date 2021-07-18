import Ship from '../ship';

export default class Gameboard {
  constructor(board) {
    this.board = board || Gameboard.createGameboard();
    this.shipsPlaced = [];
    this.sunkShips = [];
  }

  randomShipPlace() {
    const directions = ['vertical', 'horizontal'];
    const startingPositonX = Math.floor(Math.random() * 8);
    const startingPositonY = Math.floor(Math.random() * 8);
    const direction = directions[Math.floor(Math.random() * 2)];
    const shipLength = Math.floor((Math.random() * 4) + 3);
    const ship = new Ship(shipLength);
    this.placeShip(startingPositonX, startingPositonY, direction, ship);
  }

  randomEnemyboard() {
    // eslint-disable-next-line no-constant-condition
    while (1) {
      this.randomShipPlace();
      if (this.shipsPlaced.length === 4) break;
    }
  }

  placeShip(startingPointX, startingPointY, direction, ship) {
    const obj = Gameboard.placeShipArr(startingPointX, startingPointY, direction, ship, this.board);

    if (obj) {
      this.board = obj.board;
      this.shipsPlaced.push(obj.ship);
    }
  }

  static createGameboard() {
    const arr = [];

    for (let i = 0; i <= 8; i++) {
      arr[i] = [];
      for (let j = 0; j <= 8; j++) {
        arr[i][j] = { hitStatus: false, shipPlaced: false };
      }
    }
    return arr;
  }

  static placeShipArr(startingPointX, startingPointY, direction, ship, board) {
    let newBoard = [...board];
    let status = false;
    if (direction === 'vertical') {
      for (let i = 0; i < ship.length; i++) {
        if (((startingPointY + i) < 9) && !newBoard[startingPointY + i][startingPointX].ship) {
          status = true;
        } else {
          return false;
        }
      }
      if (status) {
        for (let i = 0; i < ship.length; i++) {
          newBoard[startingPointY + i][startingPointX] = {
            ship,
            hitStatus: false,
            position: {
              direction,
              startingPoint: startingPointY,
            },
          };
        }
      }
    }

    if (direction === 'horizontal') {
      for (let i = 0; i < ship.length; i++) {
        if (((startingPointX + i) < 9) && !newBoard[startingPointY][startingPointX + i].ship) {
          status = true;
        } else {
          return false;
        }
      }
      if (status) {
        for (let i = 0; i < ship.length; i++) {
          newBoard[startingPointY][startingPointX + i] = {
            ship,
            hitStatus: false,
            position: {
              direction,
              startingPoint: startingPointX,
            },
          };
        }
      }
    }
    return {
      board: newBoard,
      ship,
    };
  }

  receiveAttackShip(x, y) {
    const obj = Gameboard.receiveAttack(x, y, this.board);

    // eslint-disable-next-line no-restricted-syntax
    for (let ship of this.shipsPlaced) {
      if (ship === obj.ship) {
        ship.hit(obj.shipHittedPosition);
        let sunkObj = Gameboard.controlSunk(this.shipsPlaced);
        this.shipsPlaced = sunkObj.shipsPlaced;
        this.sunkShips = sunkObj.sunkShips;
        break;
      }
    }
    this.board = obj.board;
    this.controlSunkGameboard();
  }

  controlSunkGameboard() {
    const obj = Gameboard.controlSunk(this.shipsPlaced);
    this.shipsPlaced = obj.shipsPlaced;
    this.sunkShips = obj.sunkShips;
  }

  static controlSunk(ships) {
    let sunkShips = [];
    ships.forEach((ship) => {
      ship.isSunk();
      if (ship.isSunkStatus === true) {
        sunkShips.push(ship);
      }
    });

    return {
      shipsPlaced: ships,
      sunkShips,

    };
  }

  static controlWinner(board1, board2) {
    if (board1.shipsPlaced.length === board1.sunkShips.length) { return 'Ai win'; }
    if (board2.shipsPlaced.length === board2.sunkShips.length) { return 'You win'; }
    return false;
  }

  static receiveAttack(x, y, board) {
    let shipPlaced = false;
    let ship;
    let hitPosition;
    let direction;
    let myBoard = [...board];
    if (board[y][x].hitStatus === true) {
      throw new Error();
    }
    if (board[y][x].shipPlaced !== false) {
      shipPlaced = true;
      ship = board[y][x].ship;
    }
    myBoard[y][x].hitStatus = true;
    if (shipPlaced) {
      direction = myBoard[y][x].position.direction;
      if (direction === 'vertical') {
        hitPosition = Math.abs(y - myBoard[y][x].position.startingPoint);
      }

      if (direction === 'horizontal') {
        hitPosition = Math.abs(x - myBoard[y][x].position.startingPoint);
      }
    }

    return {
      shipPlaced,
      ship,
      board: myBoard,
      shipHittedPosition: hitPosition,
    };
  }
}
