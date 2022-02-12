let i = 1;
let H1 = document.getElementById("H1");
function buttonClick() {
    if (i==0) {
        H1.color = red;
        i++;
    } else {
        H1.color = blue;
        i--;
    } 
}