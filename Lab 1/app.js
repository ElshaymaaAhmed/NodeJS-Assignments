var calculator = require('./calculate');
  
var x = 20, y = 10;
  
console.log("Addition of 20 and 10 is "
                   + calculator.add(x, y));
  
console.log("Subtraction of 20 and 10 is "
                   + calculator.sub(x, y));
  
console.log("Multiplication of 20 and 10 is "
                   + calculator.mult(x, y));


//////////////////////////////////////////////////////////////

var welcome = require('./welcomeMsg');

var name = "Shaimaa", date = new Date(1999,9,9);

console.log(welcome.getAge(name, date));
console.log(welcome.getAge(name, new Date(2023,4,4)));