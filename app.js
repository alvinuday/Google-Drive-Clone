var section1 = document.getElementsByClassName("section1");
var hambox = document.getElementsByClassName("togglebox");
var counter=2;
function clicked() {
    if (counter%2==0) {
       hambox[0].style.display = "flex";
    }
    else {
        hambox[0].style.display = "none";
    }
    counter++;

};
