const allBtns= document.querySelectorAll('.toggle-btn');
const ourContent= document.querySelectorAll('.content');
const Allcontentbtns= document.querySelector('.content-btns');

Allcontentbtns.addEventListener('click',(e)=>{
    const id= e.target.dataset.id;
   allBtns.forEach(btns=>{
    if(id){
        btns.classList.remove('active');
        e.target.classList.add('active');

        // removing the active class in all the contents
        ourContent.forEach(contents=>{
            contents.classList.remove('active');
            let elements=contents.getAttribute('id');
            if(elements == id){
                contents.classList.add('active');

            }
        });

        //adding the active class to the id that will be selected when the button is clicked

        // const elements= document.getElementById(id);
        // console.log(elements);
        // elements.classList.add('active');

    }
   });
});

