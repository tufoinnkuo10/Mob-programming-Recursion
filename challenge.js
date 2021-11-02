module.exports = function sum(number) {
  
    if (number == 0) {
      return 0;
    }
   else {
     return sum(number -1 )+ number;
   }
  }

//  console.log(sum(4))
//  console.log(sum(10))
