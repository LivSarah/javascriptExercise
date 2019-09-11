window.play = function () {
    //Generate a random number from 1 to 3 to determine what the cpu choose.
    var cpuChoise = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    //get the radio buttons from the html
    var radios = document.getElementsByName('radiovalue');
    var userChoise;

    //Check which radio box is ticked
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            userChoise = radios[i].value;
            break;
        }
    }
    console.log("User: " + userChoise + " cpu: " + cpuChoise);
    //Check if the user chose an option
    if (userChoise === undefined) {
        //document.resultform.resultview.value = "You must choose rock, paper or scissors to play!";
        window.alert("You must choose rock, paper or scissors to play!");
    } else {
        //If the user chose rock:
        if (userChoise.localeCompare("rock") === 0) {
            if (cpuChoise === 1) {
                document.resultform.resultview.value = "The CPU chose Rock, it's a tie!";
            } else if (cpuChoise === 2) {
                document.resultform.resultview.value = "The CPU chose Paper, you loose!";
            } else {
                document.resultform.resultview.value = "The CPU chose Scissors, you win!";
            }
        //If the user chose paper:
        } else if (userChoise.localeCompare("paper") === 0) {
            if (cpuChoise === 1) {
                document.resultform.resultview.value = "The CPU chose Rock, you win!";
            } else if (cpuChoise === 2) {
                document.resultform.resultview.value = "The CPU chose Paper, it's a tie!";
            } else {
                document.resultform.resultview.value = "The CPU chose Scissors, you loose!";
            }
        //If the user chose scissors:
        } else {
            if (cpuChoise === 1) {
                document.resultform.resultview.value = "The CPU chose Rock, you loose!";
            } else if (cpuChoise === 2) {
                document.resultform.resultview.value = "The CPU chose Paper, you win!";
            } else {
                document.resultform.resultview.value = "The CPU chose Scissors, it's a tie!";
            }
        }
    }

    
};