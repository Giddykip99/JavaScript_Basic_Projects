//our colors
let colors =['red','green','yellow','purple'];
let color= document.querySelector('#color');
let btn = document.querySelector('.btn');
btn.addEventListener('click', (event)=>{
    event.preventDefault();
    let index= Math.floor( Math.random() * colors.length);
    document.body.style.backgroundColor= colors[index];
    color.textContent=colors[index];
    
});