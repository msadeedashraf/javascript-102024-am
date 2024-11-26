/*
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);

*/
/*
function add(num1,num2)
{
    let myTotal = num1+num2;
    display(myTotal);
}

function display(result)
{
    console.log(result);
}

add(5,5);
*/


function add(num1,num2, callback)
{
    let myTotal = num1+num2;
    callback(myTotal);
    myTotal=100;
}

function display(result)
{
    console.log(result);
}



function display2(result)
{
    console.log(`My Total is ${result}`);
}

add(150,50,display2);
