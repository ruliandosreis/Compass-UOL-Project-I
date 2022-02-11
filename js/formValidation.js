const form = document.querySelector("form");

form.addEventListener("submit", event =>{
    isChecked();
    isNameValid();
    isEmailValid();
    isPasswordValid();
    isPhoneValid();

    if(isChecked() == true && isNameValid() == true && isEmailValid() == true && isPasswordValid() == true && isPhoneValid() == true){
        location.href="sucesspage.html";
    }
    event.preventDefault();
})

function isChecked(){
    const checkbox = document.querySelector("#checkmark");
    if(!checkbox.checked){
        const checkWarning = document.getElementById("check-warning");
        checkWarning.classList.remove("invisible");
        return false;
    }
    else{
        return true;
    }
}

function isNameValid(){
    const name = document.querySelector("#full-name");
    if(name.value.length>4 && name.value.indexOf(" ")!=(-1)){
        return true;
    }
    else{
        const nameWarning = document.getElementById("name-warning");
        nameWarning.classList.remove("invisible");
        return false;
    }
}

function isEmailValid(){
    const email = document.querySelector("#email");
    const emailWarning = document.getElementById("email-warning");
    const emailRegex = /^[a-z0-9.]+@+[a-z0-9.]+$/;

    if(!emailRegex.test(email.value)) {
        emailWarning.classList.remove("invisible");
        return false;
    }
    return true;
}

function isPhoneValid(){
    const phone = document.querySelector("#phonenumber");
    const phoneWarning = document.getElementById("phone-warning");
    const phoneRegex = /^[0-9]+$/;

    if(phoneRegex.test(phone.value) && phone.value.length == 11){
        return true;
    }else{
        phoneWarning.classList.remove("invisible");
        return false;
    }

}

function isPasswordValid(){
    const password = document.querySelector("#password");
    const passwordWarning = document.getElementById("password-warning");
    const passwordRegex = /^[0-9]+$/;
    

    if(passwordRegex.test(password.value) && password.value.length>=6 && password.value.length<=9){
        return true;
    }else{
        passwordWarning.classList.remove("invisible");
        return false;
    }

}