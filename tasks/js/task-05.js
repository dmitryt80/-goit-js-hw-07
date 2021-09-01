const inputField = document.getElementById("name-input");
const nameOutput = document.getElementById('name-output');


inputField.addEventListener('input', onInputChange);

function onInputChange(event) {
    
    let currentValue = event.currentTarget.value;
    nameOutput.textContent = currentValue;

    if (currentValue === "") {
         nameOutput.textContent = "незнакомец";
    }
}