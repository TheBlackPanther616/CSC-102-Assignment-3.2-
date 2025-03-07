function checkCreds()
{
    // Establishing the variables 
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var fullName = firstName +  " " + lastName;
    var zipNum = document.getElementById("zipCode").value;
    var badgeNum = document.getElementById("badgeID").value;
    var passW = document.getElementById("PW").value;
 
    

    // Establishing arguements for inputs
    if (fullName.length <= 1)
    {
        document.getElementById("loginStatus").innerHTML = "Names must have more than one Character";
    }
    else if (fullName.length >= 20)
        {
            document.getElementById("loginStatus").innerHTML = "Names has too many Characters";
        }
        else if (zipNum.length !=5)
            {
                document.getElementById("loginStatus").innerHTML = "Invalid zip code";
            }
    
        else if ((zipNum<10000)  || (zipNum>99999))
        {
            document.getElementById("loginStatus").innerHTML = "Invalid zip code";
        }
    else if ((badgeNum<100)  || (badgeNum>999))
    {
        document.getElementById("loginStatus").innerHTML = "Invalid badge num";
    }
    else if (passW !="Bishop")
     {
         document.getElementById("loginStatus").innerHTML = "Invalid Password: Access Denied";
     }
    else
     
     {
        document.getElementById("loginStatus").innerHTML = "Access Granted";
     }
     

}