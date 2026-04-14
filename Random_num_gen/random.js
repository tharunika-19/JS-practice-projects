let random=Math.floor(Math.random()*100)+1;
let submitbtn=document.getElementById("submitbtn");
let result=document.getElementById("result");
submitbtn.onclick=function(){
    let userInput=document.getElementById("myInput").value;
    if(userInput==random){
        result.textContent="Congratulations! You guessed the number.";
    }
    else if(userInput<random){
        result.textContent="Too low! Try again.";
    }
    else{
        result.textContent="Too high! Try again.";
    }

}
console.log(random);