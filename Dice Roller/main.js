
button.addEventListener("click", dicecontroller);
function dicecontroller() {
    const input = document.getElementById("input").value;
    const button = document.getElementById("button");
    const diceresult =document.getElementById("result");
    const imgresult = document.getElementById("imgresult");
    const values = [];
    const img = [];

    for( let i =0; i<input;i++){
        const value = Math.floor(Math.random()*6)+1;
         values.push(value);
         img.push('<img src="img/${value}.png"');
    
       
    }

    diceresult.textContent = `dice: ${values.join(',')}`;
 

    
}