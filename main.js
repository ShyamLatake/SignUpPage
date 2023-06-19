


function validate(){
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
var Cpassword = document.getElementById('password1').value;
  
     var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
       if (!regEmail.test(email)) {
        window.alert("Please enter a valid e-mail address.");
        return false;
    }

    if(password.length > 8 || password.length < 8 ){
        window.alert("password must be of 8 charcter");
        return false;
    }

    if(Cpassword != password){
        window.alert("Password is not same");
        return false
    }
    alert("Succucessfully register")
    return true;
}