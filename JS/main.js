var a;
function show(){
    document.getElementById('bootstrap-section').style.display = 'block';
    return a = 0;
}

var b;
function hide(){
    document.getElementById('bootstrap-section').style.display = 'none';
    return b = 0;
}

// form validation

function validation(){
    var name = document.getElementById('exampleInput').value;
    var email = document.getElementById('exampleInput1').value;
    var number = document.getElementById('exampleInput2').value;
    var password = document.getElementById('exampleInput3').value;
    var cpassword = document.getElementById('exampleInput4').value;

    // []-characters allowed {}-minimum,maximum characters
    var namecheck = /^[A-Za-z ]{2,}$/;
    var emailcheck = /^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,6}$/;
    var numbercheck = /^[6789][0-9]{9}$/;
    var passwordcheck = /^[A-Za-z0-9_!@#$%^&*]{8,16}$/;

    if(namecheck.test(name)){
        document.getElementById('error-name').innerHTML = "";
    }
    else{
        document.getElementById('error-name').innerHTML = "Use only alphabets";
        // prevent submission
        return false;
    }

    if(emailcheck.test(email)){
        document.getElementById('error-email').innerHTML = "";
    }
    else{
        document.getElementById('error-email').innerHTML = "Invalid email";
        // prevent submission
        return false;
    }

    if(numbercheck.test(number)){
        document.getElementById('error-number').innerHTML = "";
    }
    else{
        document.getElementById('error-number').innerHTML = "Use 10-digit valid phone number";
        // prevent submission
        return false;
    }

    if(passwordcheck.test(password)){
        document.getElementById('error-password').innerHTML = "";
    }
    else{
        document.getElementById('error-password').innerHTML = "Not strong password";
        // prevent submission
        return false;
    }

    if(cpassword.match(password)){
        document.getElementById('error-cpassword').innerHTML = "";
    }
    else{
        document.getElementById('error-cpassword').innerHTML = "Password doesnt match";
        // prevent submission
        return false;
    }
}