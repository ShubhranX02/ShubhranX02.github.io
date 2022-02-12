let i = 1;
let H1 = document.getElementById("H1");
function buttonClick() {
    if (i==0) {
        H1.style.color = red;
        i++;
    } else {
        H1.style.color = blue;
        i--;
    } 
}