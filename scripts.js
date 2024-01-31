var i = 0;
var txt = 'Computer Engineer!'; /* The text */
var speed = 90; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("computerEng").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(function () {
            document.getElementById("computerEng").innerHTML = ''; // Reset innerHTML
            i = 0; // Reset index
            typeWriter(); // Call typeWriter again
        }, 5000); // Wait for 5 seconds
    }
}

typeWriter()
