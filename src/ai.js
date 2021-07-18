export default function aiTurn(gameCtrl) {
  const { AiSets } = gameCtrl.players[1];
  const choosenSet = AiSets[Math.floor(Math.random() * AiSets.length)];

  const x = choosenSet[0];
  const y = choosenSet[1];
  gameCtrl.playerBoard.receiveAttackShip(x, y);

  gameCtrl.players[1].AiSets.splice(gameCtrl.players[1].AiSets.indexOf(choosenSet), 1);
}
