let cboard = "",
  height = 8,
  width = 8;
for (let i = 1; i <= height; i++) {
  for (let j = 1; j <= width; j++) {
    if ((i + j) % 2 == 0) {
      cboard += " ";
    } else {
      cboard += "#";
    }
  }
  cboard += "\n";
}
console.log(cboard);
