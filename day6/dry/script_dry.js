
function changeFontSize(pixels)
{

     console.log(pixels);
    document.getElementById('demo').style.fontSize=pixels;
}


function changeColor(mycolor)
{
    
    console.log(mycolor)
    document.getElementById('title').style.color=mycolor;
}
function addNum (param1, param2)
{

    var result = param1 + param2;
    document.getElementById('addnumbers').innerHTML = result

}

addNum(60,120);

/*
function yourFunctionName()
{

}
*/

