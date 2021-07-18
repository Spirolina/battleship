import Gameboard from "../factories/Gameboard";
import Ship from "../ship";
import placeShipArr from "../factories/Gameboard"

const emptyGameboard =[
  [
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false } 
  ],
  [
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false }
  ],
  [
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false }
  ],
  [
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false }
  ],
  [
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false }
  ],
  [
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false }
  ],
  [
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false }
  ],
  [
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false }
  ],
  [
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false },
    { hitStatus: false, shipPlaced: false }
  ]
]

let ships = [new Ship(3), new Ship(5), new Ship(2), new Ship(7)]
ships[0].hit(0)
ships[0].hit(1)
ships[0].hit(2)

ships[2].hit(0)
ships[2].hit(1)
let sunkShips = [ships[0], ships[2]];
let shipsPlaced = [ships[1], ships[3]]

ships.forEach(ship => ship.isSunk());


const ship = new Ship(4);
const shippyBoard = [
    [ { ship, hitStatus: false, position : {direction: 'vertical', startingPoint: 0 } }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }],
    [{ ship, hitStatus: false, position : {direction: 'vertical', startingPoint: 0 } }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }],
    [{ ship, hitStatus: false, position : {direction: 'vertical', startingPoint: 0 } }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }],
    [{ ship, hitStatus: false, position : {direction: 'vertical', startingPoint: 0 } }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }],
    [{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }],
    [{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }],
    [{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }],
    [{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }],
    [{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }],
    [{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }],
    [{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }],
    [{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }],
    [{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }],
    [{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }],
    [{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }],
    [{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }],
    [{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }],
    
  ];
const hittedShippyBoard = [
    [ { ship, hitStatus: false, position : {direction: 'vertical', startingPoint: 0 } }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }],
    [{ ship, hitStatus: false, position : {direction: 'vertical', startingPoint: 0 } }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }],
    [{ ship, hitStatus: true, position : {direction: 'vertical', startingPoint: 0 } }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }],
    [{ ship, hitStatus: false, position : {direction: 'vertical', startingPoint: 0 } }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }],
    [{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }],
    [{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }],
    [{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }],
    [{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }],
    [{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }],
    [{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }],
    [{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }],
    [{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }],
    [{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }],
    [{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }],
    [{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }],
    [{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }],
    [{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false },{ hitStatus : false, shipPlaced: false }, { hitStatus : false, shipPlaced: false }],
    
  ];
test('consturctor gameboard test', () => {
    expect((new Gameboard).board ).toBeDefined()
})

test('create empty gameboard test', ()=> {
    expect(Gameboard.createGameboard()).toEqual(emptyGameboard);
})

test('place ship test', ()=> {
    expect(Gameboard.placeShipArr(0,0, 'vertical', new Ship(4), emptyGameboard )).toEqual({board :[
      [
        {ship, hitStatus: false, position : {direction: 'vertical', startingPoint: 0}  },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false } 
      ],
      [
        { ship, hitStatus: false, position : {direction: 'vertical', startingPoint: 0} },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false }
      ],
      [
        {ship, hitStatus: false, position : {direction: 'vertical', startingPoint: 0}  },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false }
      ],
      [
        {ship, hitStatus: false, position : {direction: 'vertical', startingPoint: 0}  },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false }
      ],
      [
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false }
      ],
      [
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false }
      ],
      [
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false }
      ],
      [
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false }
      ],
      [
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false },
        { hitStatus: false, shipPlaced: false }
      ]
    ],
      ship : new Ship(4)})
    })

    test('receive attack test', () => {
        expect(Gameboard.receiveAttack(0,2, shippyBoard)).toEqual({
            shipPlaced : true,
            ship: ship,
            board: hittedShippyBoard,
            shipHittedPosition: 2,
        })
    })

    console.log(ships);
    test('sunk ships test', () => {
      expect(Gameboard.controlSunk(ships)).toEqual({
        sunkShips : sunkShips,
        shipsPlaced : ships,
      });
    })
    