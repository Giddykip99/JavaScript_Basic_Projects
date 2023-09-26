let count=0;
let btns= document.querySelectorAll('.btn');
let value=document.querySelector('#value');
for(let allbtns of btns){
  allbtns.addEventListener('click', (e)=>{
   let Theclass= e.currentTarget.classList;
   if(Theclass.contains('decrease')){
    count--;
   }else if(Theclass.contains('increase')){
    count++;
   }else{
    count =0;
   }
   if(count< 0){
    value.style.color='red';
   }else if(count> 0){
    value.style.color='green';
   }else{
    value.style.color='black';
   }
   value.textContent= count;
   
  });
}