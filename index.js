let numbersarray=[1,2,3,4,5,6,7,8,9,10];
let number;


function check() {
    let number = Number(document.getElementById("number").value); 
    let i;
    let found = false; 

    for (i = 0; i < numbersarray.length; i++) {
        if (numbersarray[i] === number) {
            found = true;
            break; 
        }
    }

    if (found) {
        document.getElementById("result").innerHTML = "Number is present in the array";
    } else {
        document.getElementById("result").innerHTML = "Number is not present in the array";
    }
}