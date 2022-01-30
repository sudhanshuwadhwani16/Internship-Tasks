const ipValues = () => {
    if (document.getElementById('input1').value !== "") {
        var input1 = +(document.getElementById('input1').value);
    } else {
        var input1 = NaN
    }
    var input2 = +(document.getElementById('input2').value);
    if (isNaN(input1) || input1 < 0 || isNaN(input2)) {
        alert("Error! Enter valid number");
        document.getElementById('input1').value = "";
        document.getElementById('input2').value = "";
        document.getElementById('displayAnswer').value = "";
        return;
    }
    return [input1, input2];
}



function addition() {
    const ret = ipValues();
    if (ret !== undefined) {
        console.log(ret);
        const [input1, input2] = ret;        
        var result = input1 + input2;
        console.log(input1, input2);
        document.getElementById('displayAnswer').value = result;
    }
}

function subtraction(){
    const ret = ipValues();
    if (ret !== undefined) {
        console.log(ret);
        const [input1, input2] = ret;        
        var result = input1 - input2;
        console.log(input1, input2);
        document.getElementById('displayAnswer').value = result;
    }
}

function multiplication(){
    const ret = ipValues();
    if (ret !== undefined) {
        console.log(ret);
        const [input1, input2] = ret;        
        var result = input1 * input2;
        console.log(input1, input2);
        document.getElementById('displayAnswer').value = result;
    }
}

function divison(){
    const ret = ipValues();
    if (ret !== undefined) {
        console.log(ret);
        const [input1, input2] = ret;        
        var result = input1 / input2;
        console.log(input1, input2);
        document.getElementById('displayAnswer').value = result;
    }
}

function mod(){
    const ret = ipValues();
    if (ret !== undefined) {
        console.log(ret);
        const [input1, input2] = ret;        
        var result = input1 % input2;
        console.log(input1, input2);
        document.getElementById('displayAnswer').value = result;
    }
}