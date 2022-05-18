// find the largest number in an array
const largeNumber = (arr) => {
    let largest = 0;
    arr.forEach((x) => {
      if(x > largest){
        largest = x;
      }
    })
    return largest;
  
  } 
  // remove the 3rd item from array
  let arr = [0, 1, 2, 3]
  const cut3 = (arr) => {
    arr.splice(2, 1);
    return arr
  }
  
  module.export (sum, concat)