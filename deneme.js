const arr = [];

for (let i = 0; i <= 8; i++) {
  arr[i] = [];
  for (let j = 0; j <= 8; j++) {
    arr[i][j] = { hitStatus: false, shipPlaced: false };
  }
}
console.log(arr);
