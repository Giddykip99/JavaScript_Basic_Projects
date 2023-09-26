let colors =[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let color= document.querySelector('#color');
let btn = document.querySelector('.btn');
btn.addEventListener('click', (event)=>{

    let hex='#';
    for(let i=0; i< 6; i++){
        hex += colors[randomNo()];
        color.textContent=hex;
        document.body.style.backgroundColor=hex;
    }    
});
function randomNo(){
    let random= Math.floor(Math.random() * colors.length);
    return random
}