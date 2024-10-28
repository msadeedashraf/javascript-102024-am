
function changeFontSize(pixels)
{

    console.log(pixels);
    document.getElementById('demo').style.fontSize=pixels;
}

function changeElementColor(elementid)
{
    console.log(elementid);
    var myElement = document.getElementById(elementid);
    console.log(myElement);
    var myColor = window.getComputedStyle(myElement).backgroundColor;
    console.log(myColor);
    document.getElementById('title').style.color=myColor;
}



/*
function yourFunctionName()
{

}
*/



