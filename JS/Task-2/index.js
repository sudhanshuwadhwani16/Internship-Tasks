const colorArray = ["red", "green", "yellow"];

var selectedButton = document.getElementsByClassName('button');

let j=colorArray.length -1; 
function clockwise(){
    for(let i=0;i<3;i++){
        if(j >= colorArray.length){
            j=0;
        }
        selectedButton[i].style.backgroundColor = colorArray[j];
        j++;
    }
    j--;
}

function anticlockwise(){

    for(let i=2;i>=0;i--){
        if(j<0){
            j=colorArray.length-1;
        }
        selectedButton[i].style.backgroundColor = colorArray[j];
        j--;
    }
    j++;
}

function colourChanger(selectedColour) {

    if(selectedColour == "red"){
    selectedButton[0].style.backgroundColor = selectedColour;
    }
    else if(selectedColour == "green"){
    selectedButton[1].style.backgroundColor = selectedColour;
    }
    else{
    selectedButton[2].style.backgroundColor = selectedColour;
    }
}


