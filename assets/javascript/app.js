//only show the intro on load
window.onload = function() {
    document.getElementById("intro").hidden = false;
    document.getElementById("question").hidden = true;
    document.getElementById("end").hidden = true;
};

var number = 600;
var count;

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