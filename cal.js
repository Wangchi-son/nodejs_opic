const arr = [1, 2, 3];

const result = arr.reduce(function add(sum, currValue) {
  return sum + currValue;
}, 0);
document.writeln(result);
