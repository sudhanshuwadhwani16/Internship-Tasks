function ipValues() {
    var min = +(document.getElementById('min').value);
    var max = +(document.getElementById('max').value);
    var mul = +(document.getElementById('mul').value);

    var input1 = document.getElementById('min');
    var input2 = document.getElementById('max');
    var input3 = document.getElementById('mul');
    return [min, max, mul, input1, input2, input3];
}

function validate() {
    const ret = ipValues();
    const [min, max, mul, input1, input2, input3] = ret;

    input1.style.borderColor = "black";
    input2.style.borderColor = "black";
    input3.style.borderColor = "black";

    if (min < max && max % min == 0) {
        console.log("everything is correct.");
    } else {
        input1.style.borderColor = "red";
        input2.style.borderColor = "red";
        console.log(min);
    }

    if (mul < max && max % mul == 0) {
        console.log("everytthing is correct");
    } else {
        input2.style.borderColor = "red";
        input3.style.borderColor = "red";
    }

    if (mul <= min) {
        console.log('everything is correct')
    } else {
        input1.style.borderColor = "red";
        input3.style.borderColor = "red";
    }
}