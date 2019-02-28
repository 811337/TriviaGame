//only show the intro on load
window.onload = function() {
    document.getElementById("intro").hidden = false;
    document.getElementById("question").hidden = true;
    document.getElementById("end").hidden = true;
};

var number = 60;
var count;
var countCorrect = 0;

function decrement() {
    number--;
    $("#seconds").html("<span>" + number + "</span>");

    //stops the timer and goes to results
    if (number === 0) {
        clearInterval(count)
        document.getElementById("question").hidden = true;
        document.getElementById("end").hidden = false;
    };
};

function timer() {
    count = setInterval(decrement, 1000);
};

//once begin button is clicked, changes to questions and begins timer
document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById("intro").hidden = true;
    document.getElementById("question").hidden = false;
    timer();
});


//once submit button is clicked, changes to results
document.getElementById("endButton").addEventListener("click", function() {
    document.getElementById("question").hidden = true;
    document.getElementById("end").hidden = false;
});

//define correct answer
//if correct answer is active, add to correct count, otherwise add to incorrect count
document.getElementById("option2").addEventListener("click", function() {
    countCorrect++;
    $("#correct").html("<span>" + countCorrect + "</span>");
    console.log(countCorrect);
})