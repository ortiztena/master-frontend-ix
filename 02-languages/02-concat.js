const arr1 = [ 1, 2, 3];
const arr2 = ["uno", "dos", "tres"];
const arr3 = [true, false, undefined];

const concat = ([first, second, thirth] , b) => {
  return [first, second, thirth, ...b];
}

console.log(concat(arr1 , arr2));

// ampliacion // 

const concatMulti = (...x) => {
  let combi = [];
  for (let a of x) {
    combi.push(...a);
  }
  return combi;
}

console.log(concatMulti(arr1 , arr2, arr3));