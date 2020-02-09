function sumFor(someData){
  let sum = 0;
  for (let i = 0; i < someData; i++){
    sum += someData;

  }
  return sum;
}

function sumWhile(someData) {
  let sum= 0;
  let i = 0;
  while(i < someData){
    sum += someData;
  }
  return sum;
}

function sumRecursion(someData){
  if (someData === 0){
    return 0;
  } else {
    return (sumRecursion(someData - 1)) + 1);
  }
  return 0;
}

function sumTheSimpleWay(someData) {
  return (_.reduce(someData));
}

// noinspection JSUnusedGlobalSymbols
export default {
  sumFor, sumWhile, sumRecursion, sumTheSimpleWay
}