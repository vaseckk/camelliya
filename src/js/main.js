import sum from './module/sum.js';

function myFunction() {
    let myBlock = document.getElementById("button-none_sms");
    let currentDisplay = myBlock.style.display;

    if(currentDisplay === "block") {
        myBlock.style.display = "none";
    }
    else {
        myBlock.style.display = "block";
    }
}

function myFunctionclose() {
    document.getElementById("button-none_sms").style.display = "none";
}


document.getElementById("button-close_sms").addEventListener("click", myFunction);

document.getElementById("close-button_sms").addEventListener("click", myFunctionclose);


/*const edem = document.getElementById('edem');
const modal = document.getElementsByClassName('modalVisitka')
const clickOnEdem = document.getElementById('clickOnEdem');

clickOnEdem.addEventListener('click', Showonclick)

function Showonclick () {
    clickOnEdem.classList.remove = edem;
    clickOnEdem.classList.add = modalVisitka;
}*/