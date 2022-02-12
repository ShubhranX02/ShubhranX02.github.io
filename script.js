let i = 1;
function buttonClick() {
    let H1 = document.getElementById("H1");
    if (i==0) {
        H1.innerText = "My Name Is Shubhran!";
        i++;
    } else {
        H1.innerText = "How Are You?";
        i--;
    } 
}