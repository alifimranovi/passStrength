
let password = document.getElementById('password');
let message = document.getElementById('message');
let strength = document.getElementById('strength');

let str1 = '!' || '@' || '?' || '$' || '%' || '&';

password.addEventListener('input', () => {

    if (password.value.length > 0){
        message.style.display = "block";
    }else{
        message.style.display = "none";
        password.style.borderColor = "#ccc"
    };

    if (password.value.length > 0 && password.value.length < 4){

        strength.innerHTML = "weak";
        password.style.borderColor = "#ff5925"
        message.style.color = "#ff5925"

    }else if (password.value.length >= 4 && password.value.length < 8){

        strength.innerHTML = "medium";
        password.style.borderColor = "#ffff00"
        message.style.color = "#ffff00"

    }else if (password.value.length >= 8 && password.value.includes(str1)) {

        strength.innerHTML = "strong";
        password.style.borderColor = "#26d730"
        message.style.color = "#26d730"
        
    };
});

function log() {
    if (strength.innerHTML == "strong") {
        alert("Interaction successful");
        location.reload();
    }else{
        alert("You must use a powerful password");
    }
};