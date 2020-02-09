const nums = [1, 2, 3];
function sumFor(someData) {
  let sum = 0;
  for (const num of someData) {
    sum += num;
  }
  return sum;
}
console.log(sumFor(nums)); // 6

function sumWhile(someData) {
  let sum = 0;
  let i = 0;
  while (i <= someData.length) {
    sum += i;
    i++;
  }
  return sum;
}

console.log(sumWhile(nums));

function sumRecursion(someData) {
  if (someData.length === 0) {
    return 0;
  }
  const total = someData[0];
  // slice was got from the webcast, I had no idea that how to complete this task it JS.
  return sumRecursion(someData.slice(1, someData.length)) + total;
}

console.log(sumRecursion(nums));

function sumTheSimpleWay(someData) {
  return _.reduce(someData, function (memo, num) { return memo + num; });
}
console.log(sumTheSimpleWay(nums));
