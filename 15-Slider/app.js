const slides= document.querySelectorAll('.image');
const prevbtn= document.querySelector('.prevbtn');
const nextbtn= document.querySelector('.nextbtn');

 
let count=0;
slides.forEach((slide,index)=> {
    slide.style.left=`${index * 100}%`;
    
});
nextbtn.addEventListener('click',()=>{
    count++;
    slider();
    
});

prevbtn.addEventListener('click',()=>{
    count--;
    slider();
});
prevbtn.style.display='none';

function slider(){
    if(count >=slides.length-1){
        nextbtn.style.display='none';
    }else{
        nextbtn.style.display='block';
    }
    if(count<= 0){
        prevbtn.style.display='none';

    }else{
        prevbtn.style.display='block';
    }
    slides.forEach((slide)=>{
        slide.style.transform=`translateX(-${count*100}%)`;
    })
}
