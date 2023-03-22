// create custom module  
// contain function constructor 
// inheriting from emitter  
// this function has on and emit  
// I can send data from emit and log in on function 

var Emitters = require('events')
var utils = require('util')
var FuncCons = new Function();

utils.inherits(FuncCons,Emitters)

FuncCons.prototype.greet = function(data){
  this.emit('eventfired', data)
}

var NewCustomFunc = new FuncCons();

NewCustomFunc.on('eventfired', function(data){
  console.log(data)
});

NewCustomFunc.greet('Hello this is Shaima speaking..');