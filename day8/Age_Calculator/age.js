//alert('js alert')

function calculateage()
{
        
       
        var todayDate = new Date()
        var currentYear = todayDate.getFullYear();

        var DOB = document.getElementById('dob').value;
        
        var myDOB = new Date(DOB);  
        var myDOBYear = myDOB.getFullYear();

        //console.log(currentYear);
        //console.log(myDOBYear);


        var myAge = currentYear - myDOBYear;
        
        document.getElementById('message').innerHTML  = "Your are " +  myAge+" year old"; 

}