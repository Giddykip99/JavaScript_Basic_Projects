let nav= document.querySelector('.nav');
let bar=document.querySelector('#bars');
document.body.addEventListener('click',(e)=>{
    if(e.target.id == 'close'){
       if(nav.classList.contains('show-links')){
        nav.classList.remove('show-links');
        bar.classList.remove('barsmall');
        
       }
    }
    else if(e.target.id == 'bar'){
        if(nav.classList.contains('show-links')){
            nav.classList.remove('show-links');
           }else{
            nav.classList.add('show-links');
            bar.classList.add('barsmall');
          
           }
    }
});
