//alert("Hello")


//var myBill =  document.getElementById("bill");
//console.log(myBill);

function calculatetip()
{
    var myBillAmount =  document.getElementById("bill").value;
    var myTip =  document.getElementById("tip").value;
    var totalAmount = myBillAmount * (1+myTip/100);
    document.getElementById('total').innerHTML = totalAmount.toFixed(2);

}
