var element = document.getElementById("blinker");

function blink() {
    "use strict";
    element.style.opacity = element.style.opacity === "1" ? 0 : 1;
    setTimeout(blink, element.style.opacity === "1" ? 250 : 250);
}

blink();
