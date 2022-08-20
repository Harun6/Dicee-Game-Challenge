/*
    var randomNumber1 = Math.random();
    randomNumber1 = randomNumber1*6;
    randomNumber1 = Math.floor(randomNumber1) + 1;
    document.getElementById("player1img").src = `images/dice${randomNumber1}.png`;

    var randomNumber2 = Math.random();
    randomNumber2 = randomNumber2*6;
    randomNumber2 = Math.floor(randomNumber2) + 1;
    document.getElementById("player2img").src = `images/dice${randomNumber2}.png`;


    if(randomNumber1 > randomNumber2){
        document.getElementById("title").textContent = "🚩 Player 1 Wins!";
    }

    else if(randomNumber2 > randomNumber1){
        document.getElementById("title").textContent = "Player 2 Wins! 🚩";
    }

    else{
        document.getElementById("title").textContent = "Draw";
    }
*/    

    // Method 2

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML ="🚩 Player 1 Wins!";
    }
    else if(randomNumber2 > randomNumber1){
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    }
    else{
        document.querySelector("h1").innerHTML = "Draw";
    }