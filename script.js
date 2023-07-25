let nameError = document.querySelector('#name-error');
let phoneError = document.querySelector('#phone-error');
let emailError = document.querySelector('#email-error');
let messageError = document.querySelector('#message-error');
let submitError = document.querySelector('#submit-error');

let nameInput = document.querySelector('#name');
let phoneInput = document.querySelector('#phone');
let emailInput = document.querySelector('#email');
let messageInput = document.querySelector('#message');


function validateName(){
    var name = nameInput.value;
    
    if (name.length == 0){
        nameError.innerText = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerText = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validatePhone(){
    var phone = phoneInput.value;

    if (phone.length == 0){
        phoneError.innerText = "Phone no. is required";
        return false;
    }
    if (phone.length !== 10){
        phoneError.innerText = "Phone no. should be 10 digits";
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)){
        phoneError.innerText = 'Only digits please';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validateEmail(){
    var email = emailInput.value;

    if (email.length == 0){
        emailError.innerText = "Email is required";
        return false;
    }
    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){
        emailError.innerText = 'Email invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validateMessage(){
    var message = messageInput.value;
    var required = 30;
    var left = required - message.length;

    if (left > 0){
        messageError.innerText = left + " more characters required";
        return false;
    }
    messageError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validateForm(){
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.innerText = "Please fix error to submit";
        submitError.style.display = "block";
        setTimeout(function(){
            submitError.style.display = "none";
        }, 3000);
        return false;
    }
    return true;
}

nameInput.addEventListener('input', validateName);
phoneInput.addEventListener('input', validatePhone);
emailInput.addEventListener('input', validateEmail);
messageInput.addEventListener('input', validateMessage);
