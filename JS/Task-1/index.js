function colourChanger(selectedColour) {
    var selectedButton = document.getElementsByClassName('button');
    if(selectedColour == "red"){
    selectedButton[0].style.backgroundColor = selectedColour;
    selectedButton[1].style.backgroundColor = "white";
    selectedButton[2].style.backgroundColor = "white";
    }
    else if(selectedColour == "green"){
    selectedButton[1].style.backgroundColor = selectedColour;
    selectedButton[2].style.backgroundColor = "white";
    selectedButton[0].style.backgroundColor = "white";
    }
    else{
    selectedButton[2].style.backgroundColor = selectedColour;
    selectedButton[1].style.backgroundColor = "white";
    selectedButton[0].style.backgroundColor = "white";
    }
}


