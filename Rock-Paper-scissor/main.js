
 const myresult = document.getElementById('myresult');
 const  choises =['rock ', 'paper', 'scissor'];
 const computerchoise=document.getElementById('computerresult');
 const imagemassage=document.getElementById('imagemassage');
 const img =[];
function playgame(resopose){
    //create   computer descition with image
     const  computerindex = Math.floor(Math.random()*choises.length);
     const result =choises[computerindex];
     computerchoise.textContent= `computer choise:${result}`;

     // img selection
     //create new image element
     const image = document.createElement('img');
     // Set attributes of the <img> element
     image.src = `img/${result}.webp` ;
     image.alt = result; 
     image.width = 100; // Set the width to 100 pixels
     image.height = 100;
     // Find a parent element in the DOM (assuming there's a <div id="imageMessage">)
const imageMessage = document.getElementById('imagemassage');
// Append the new <img> element to the parent element
imagemassage.appendChild(image);




    // Clear any previous images and append the new one
    imagemassage.innerHTML = ''; // Clear previous content
    imagemassage.appendChild(image);
}