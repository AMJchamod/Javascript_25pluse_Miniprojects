  const input =document.getElementsByClassName("input").value;
 
  const button = document.querySelector("#button");
  button.addEventListener("click" , dicecontroller);
 function dicecontroller(){
    alert("dice rolling");

      console.log(input);
 }