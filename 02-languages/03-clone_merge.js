// Clone // 

const obj1 = {
    1: "uno",
    2: "dos",
    3: "tres",
  } 
  
  const clone = (source) => { 
    return {...source}
  }
  
  let obj2 = clone(obj1);
  console.log(obj2);
  
  // Merge //

  const a = {name: "Maria", surname: "Ibañez", country: "SPA"};
  const b = {name: "Luisa", age: 31, married: true};
  
  const merge = (source, target) => {
    return { ...target, ...source }
  }
  
  console.log(merge(a,b));