function checkCreds()
{
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var fullName = firstName +  " " + lastName;
    var badgeNum = document.getElementById("badgeID").value;
    var passW = document.getElementById("PW").value;

    if (fullName.length <= 1)
    {
        document.getElementById("loginStatus").innerHTML = "Names must have values";
    }
// this is redundant - just shows another way to check badgenum
    else if (badgeNum.length !=3)
        {
            document.getElementById("loginStatus").innerHTML = "Invalid badge num - 1ST CHECK W LEN";
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