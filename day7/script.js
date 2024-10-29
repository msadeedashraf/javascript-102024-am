//var myMessage = "This is a sample string"

var x = 60;
var y = 90;

var result = x + y;

console.log(result);

var result2 = y-x;
console.log(result2);

var myUSD = 100;
var myCAD=100;

var conversion = 0.78;

myCAD = myUSD / conversion;

document.getElementById('demo').innerHTML = myUSD + " USD Converted into " + myCAD  + " CAD";

myCAD = 100;

myUSD = myCAD * conversion;

document.getElementById('demo1').innerHTML = myCAD + " CAD Converted into " + myUSD  + " USD";

