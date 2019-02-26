window.onload = function() {
    document.getElementById("intro").hidden = false;
    document.getElementById("question").hidden = true;
}

var number = 60;
var intervalId;

function decrement() {
    number--;
    $("#seconds").html("<span>" + number + "</span>");
}

function timer() {
    intervalId = setInterval(decrement, 1000);
}

document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById("intro").hidden = true;
    document.getElementById("question").hidden = false;
    timer();
}, false);