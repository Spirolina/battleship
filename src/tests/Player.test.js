import Player from "../factories/Player";
let player = new Player('nick');

test('constructor test', () => {
    expect(new Player('nick')).toEqual({
        nick: 'nick',
        turnStatus: false,
        winStatus:false
    })
})

