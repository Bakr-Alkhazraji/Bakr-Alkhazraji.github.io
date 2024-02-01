var i = 0;
var txt = 'Computer Engineer!';
var speed = 90;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("computerEng").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(function () {
            document.getElementById("computerEng").innerHTML = '';
            i = 0;
            typeWriter();
        }, 5000);
    }
}

typeWriter()
