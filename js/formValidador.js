//validation name

const nameField = document.querySelector("input");

nameField.addEventListener("input", () => {
    nameField.setCustomValidity("");
    nameField.checkValidity();
    console.log(nameField.checkValidity());
});

nameField.addEventListener("invalid", () => {
    nameField.setCustomValidity("Este campo deve ser preenchido!");
});

//validation phone

var phone_input = document.getElementById("myform_phone");

phone_input.addEventListener('input', () => {
    phone_input.setCustomValidity('');
    phone_input.checkValidity();
});

phone_input.addEventListener('invalid', () => {
    if (phone_input.value === '') {
        phone_input.setCustomValidity('Enter phone number!');
    } else {
        phone_input.setCustomValidity('Enter phone number in this format: 123-456-7890');
    }
});

