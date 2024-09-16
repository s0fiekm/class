//laver tallene fra 1- 100// 
let randomNumber = Math.floor(Math.random() * 101);

//henter html elementer//
const guessButton = document.querySelector('.guessButton');
const guessInput = document.querySelector('.guessInput');
const svar = document.querySelector('.svar');

//tilføjer event listener til knappen//
guessButton.addEventListener('click', function() {
    let guess = Number(guessInput.value);

    if (guessInput.value === '' || guess < 0 || guess > 100) {
        svar.textContent = 'Gæt et tal mellem 0 og 100';
    } else if (guess === randomNumber) {
        svar.textContent = "Jubiiii, det er rigtigt!!!!";
    } else if (guess < randomNumber) {
        svar.textContent = "For lavt! Prøv igen";
    } else {
        svar.textContent = "For højt! Prøv igen";
    }

    guessInput.value = '';
    guessInput.focus();
});
