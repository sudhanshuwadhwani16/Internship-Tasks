let cbutton1 = 0,
    cbutton2 = 0,
    cbutton3 = 0;

let temp1 = false,
    temp2 = false,
    temp3 = false;

let score = 0;

let c1 = 0,
    c2 = 0,
    c3 = 0;

function button1() {
    cbutton1++;
    document.getElementById("0").innerHTML = cbutton1;
    temp1 = true;
    score++;
    c1 = score;
}

function button2() {
    cbutton2++;
    document.getElementById("1").innerHTML = cbutton2;
    temp2 = true;
    score++;
    c2 = score;
}

function button3() {
    cbutton3++;
    document.getElementById("2").innerHTML = cbutton3;
    temp3 = true;
    score++;
    c3 = score;
}

function syncAndAdd() {
    if (temp1 == false) {
        cbutton1++;
        document.getElementById("0").innerHTML = cbutton1;
    }
    if (temp2 == false) {
        cbutton2++;
        document.getElementById("1").innerHTML = cbutton2;
    }
    if (temp3 == false) {
        cbutton3++;
        document.getElementById("2").innerHTML = cbutton3;
    }

    if (temp1 == true && temp2 == true && temp3 == true) {
        if (c1 < c2 && c1 < c3) {
            cbutton1++;
            document.getElementById("0").innerHTML = cbutton1;
        } else if (c2 < c1 && c2 < c3) {
            cbutton2++;
            document.getElementById("1").innerHTML = cbutton2;
        } else {
            cbutton3++;
            document.getElementById("2").innerHTML = cbutton3;
        }
    }
}