function range(start, end, step) {
  let rangenum = [];
  if (step == null) {
    if (start < end) {
      for (let i = start; i <= end; i++) {
        rangenum.push(i);
      }
      return rangenum;
    } else {
      for (let i = start; i >= end; i--) {
        rangenum.push(i);
      }
      return rangenum;
    }
  } else {
    if (start < end) {
      for (let i = start; i <= end; i += step) {
        rangenum.push(i);
      }
      return rangenum;
    } else {
      for (let i = start; i >= end; i += step) {
        rangenum.push(i);
      }
      return rangenum;
    }
  }
}

function sum(num) {
  total = 0;
  for (let i = 1; i <= num.length; i++) {
    total += i;
  }
  return total;
}
console.log(range(1, 10));
console.log(range(5, 2));
console.log(range(1, 10, 2));
console.log(range(8, 2, -3));
console.log(sum(range(1, 10)));
