
// Head // 

const test = ["uno", "dos", "tres"];
const head = ([first]) => [first];
head(test);

//Tail//

const tail = ([ , ...x]) => x ; 
tail(test);

//Init// 

const init = (x) => x.slice(0, x.length - 1); 
init(test);

// Last // 

const last = (x) => x.slice(x.length - 1);
last(test);