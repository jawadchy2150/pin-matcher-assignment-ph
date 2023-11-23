var generateButton = document.getElementById("generateButton");
var input = document.getElementById("input");
generateButton.addEventListener('click', function () {
    var val = Math.floor(1000 + Math.random() * 9000);
    input.value = val;
    document.getElementById("success").style.display = 'none';
    document.getElementById("failed").style.display = 'none';
    submissionDisplay.value= '';
});

let submissionDisplay = document.getElementById("submissionDisplay");
let buttons = Array.from(document.querySelectorAll('.calc-body .button'));

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        if (buttonText === 'C') {
            submissionDisplay.value = '';
            data = [];
        } else if (buttonText === "DE") {
            submissionDisplay.value = submissionDisplay.value.slice(0, -1);
        } else {
            submissionDisplay.value += buttonText;
        }
    });
});

let submitButton= document.getElementById("submitButton");

submitButton.addEventListener('click', function() {
    if(input.value==submissionDisplay.value) {
        document.getElementById("success").style.display = 'block';
    }
    else {
        document.getElementById("failed").style.display = 'block';
        document.getElementById("three").style.display = 'none';
        document.getElementById("two").style.display = 'block';
    }
})