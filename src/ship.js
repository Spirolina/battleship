export default class Ship {
  constructor(length) {
    this.length = length;
    this.hitStatus = new Array(length).fill(0);
    this.isSunkStatus = false;
  }

  static hitArr(hitArr, position) {
    const newArr = [...hitArr];
    newArr[position] = 1;
    return newArr;
  }

  static isSunkArr(hitArr) {
    let isSunk = true;
    hitArr.forEach((hit) => {
      if (hit === 0) isSunk = false;
    });
    return isSunk;
  }

  isSunk() {
    this.isSunkStatus = Ship.isSunkArr(this.hitStatus);
  }

  hit(position) {
    this.hitStatus = Ship.hitArr(this.hitStatus, position);
  }
}
