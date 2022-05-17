function validate(){
    //validation for first name
    if (document.Form1.FullName.value==""){
        document.getElementById("fnv").innerHTML="*Please enter your Full Name";
        document.Form1.FullName.focus();
        return false;
    }
    else{
        document.getElementById("fnv").innerHTML="";
    }
    //Validation for E-mail
    var emailid=document.Form1.Email.value;
    var atpos=emailid.indexOf("@");
    var dotpos=emailid.lastIndexOf(".");
    if(emailid=="") {
        // alert("Hello There!");
        document.getElementById("ev").innerHTML="*Please enter your E-mail adress";
    document.Form1.Email.focus();
    return false;
    }
    else if(atpos<1||(dotpos-atpos<2)){
        document.getElementById("ev").innerHTML="*Please enter proper E-mail adress";
        document.Form1.Email.focus();
        return false;
        }
    else{
        document.getElementById("ev").innerHTML="";
    }
    // valadation for Mobile number
    var num=document.Form1.MobileNo.value;
    if (num==""){
        document.getElementById("mv").innerHTML="*Please enter your mobile number";
        document.Form1.MobileNo.focus();
        return false;
    }
    else if (num.length!=10||isNaN(num)){
        document.getElementById("mv").innerHTML="*Please enter your valid Mobile No adress";
    document.Form1.MobileNo.focus();
    return false;
    }
    else{
        document.getElementById("mv").innerHTML="";
    }
    // validation for DOB
    var dob=document.Form1.DOB.value;
    if(dob==""||dob=="dd/mm/yyyy"){
        document.getElementById("DOBv").innerHTML="Please enter your Date Of Birth";
        return false;
    }
    else{
        document.getElementById("DOBv").innerHTML="";
    }
    // Valadition for User name
    var uname=document.Form1.UserName.value;
    if(uname==""){
        document.getElementById("uv").innerHTML="Please enter your user name";
        return false;
    }
    else{
        document.getElementById("uv").innerHTML="";
    }
    // valadition password
    var p=document.Form1.Password.value;
    if(p==""||p.length<=6){
        document.getElementById("pv").innerHTML="Please enter your password *more than 6 characters*";
        return false;
    }
    else{
        document.getElementById("pv").innerHTML="";
    }
    // valadation Conform password
    var cp=document.Form1.ConformPassword.value;
    if(p!=cp){
        document.getElementById("cpv").innerHTML="Password and Conform password must be the same";
        return false;
    }
    else{
        document.getElementById("cpv").innerHTML="";
    }
    // valadation for Gender
    var g=document.getElementsByName("Gender");
    if(g[0].checked==true){
        document.getElementById("gv").innerHTML="";
    }
    else{
        document.getElementById("gv").innerHTML="Please select your gender";
        return false;
    }
    // Valadition for country
    var c=document.Form1.Country.value;
    if(c==-1){
        document.getElementById("cov").innerHTML="Please select your country";
        return false;
    }
    else{
        document.getElementById("cov").innerHTML="";
    }
}