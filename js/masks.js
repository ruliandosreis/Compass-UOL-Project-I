function dateMask(date){
    console.log(date);
    let dateText = date.value;
    if (dateText.match(/^\d{4}$/) !== null) {
        date.value = dateText + '/';
    } else if (dateText.match(/^\d{4}\/\d{2}$/) !== null) {
        date.value = dateText + '/';
    }
}

function phoneMask(phone){
    let phoneText = phone.value;
    if(phoneText.length ==0){
        phone.value = "("+ phoneText;
    }
    else if(phoneText.length ==3){
        phone.value = phoneText +") ";
    }
    else if(phoneText.length ==10){
        phone.value = phoneText +"-";
    }
}