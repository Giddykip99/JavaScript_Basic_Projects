let toggle= document.getElementById('toggle');
let header= document.querySelector('.header');
let ul= document.querySelector('.ul');
toggle.addEventListener('click',(e)=>{
    e.preventDefault();
    if(ul.hasAttribute('id','show-links')){
        ul.removeAttribute('id','show-links');
        toggle.innerHTML='<i class="fa-solid fa-bars"> </i>';
    }else{
        ul.setAttribute('id','show-links');
        toggle.innerHTML='<i class="fa-solid fa-xmark"> </i>';
    }
});