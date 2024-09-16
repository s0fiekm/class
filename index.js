//console.log("Math.random", Math.floor(Math.random()*(3+1)));//

//når man siger * 3 får man kun tallene 0,1,2//
//når man siger *(3+1) får man også tallet 3 //

// console.log(Randomnumber);

function generateRandomNumber() {
    let Randomnumber = Math.floor(Math.random()*(100+1));

    document.querySelector("h1").textContent= Randomnumber;
}

generateRandomNumber();