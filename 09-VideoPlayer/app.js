let btn= document.querySelector('.switch-btn');
let video = document.querySelector('.video-container ');

btn.addEventListener('click',()=>{
    if(!btn.classList.contains('slide')){
        btn.classList.add('slide');
        video.pause();
    }else{
        btn.classList.remove('slide');
        video.play();
    }
});

let loadcontent = document.querySelector('.loadcontent');
window.addEventListener('load',()=>{
    loadcontent.classList.add('finishload');
});