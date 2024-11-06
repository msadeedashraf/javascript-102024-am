//alert("Hello testing");
let balance = 1000;
document.getElementById("balance").innerHTML= balance;

function toggleTransactionFields()
{
    let type = document.getElementById("transactionType").value;

    //console.log(type);
/*
    if (type == "Deposit")
{
type = "Enter Deposit amount";
}
else
{
type = "Enter withdrawal amount";
}
*/

    //Ternary operator
    //condition ? "TRUE" : "False";
    document.getElementById("amount").placeholder = type == "Deposit" ? "Enter deposit amount" : "Enter withdrawal amount" ;
}

