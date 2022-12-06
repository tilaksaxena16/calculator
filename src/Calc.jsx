const add = (a,b) =>{
    let sum = a + b;
    return sum;
  }
  
  const sub = (a,b) =>{
    let subt = a - b;
    return subt;
  }
  
  const mul = (a,b) =>{
    let mult = a * b;
    return mult;
  }
  
  const div = (a,b) =>{
    let divi = a / b;
    divi = divi.toFixed(2);
    return divi;
  }
  
  export {add, sub, mul, div };