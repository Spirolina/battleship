import { jest } from '@jest/globals';
import Gameboard from '../factories/Gameboard';
import Ship from '../ship';


test('constructor ship test', () => {
  expect(new Ship(4)).toEqual({
    length: 4,
    hitStatus: [0, 0, 0, 0],
    isSunkStatus: false,
  });
});

test('hit test', () => {
    expect(Ship.hitArr([0, 1, 0, 0],3)).toEqual([0, 1, 0, 1]);
})

test('isSunk test', () => {
    expect(Ship.isSunkArr([1, 1, 1, 1])).toBeTruthy();
})
    
test('isSunk test 2', () => {
    expect(Ship.isSunkArr([1, 0, 1, 1])).toBeFalsy();
})

