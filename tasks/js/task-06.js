const currentInput = document.getElementById("validation-input");
const dataLength = currentInput.getAttribute("data-length");


currentInput.addEventListener('blur', validationOfInput);
currentInput.addEventListener("focus", onInputFocus);

function validationOfInput(event) {
    let inputLength = event.currentTarget.value.length;

    if (inputLength === Number(dataLength)) {
        console.log(true);
        currentInput.classList.add("valid");
    } else {
        currentInput.classList.add("invalid");
    }
}

function onInputFocus(event) {
  event.currentTarget.classList.remove("invalid", "valid");
}