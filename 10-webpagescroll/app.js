let listContainer= document.querySelector('.list-items');
let ulList=document.querySelector('.bar-list');
let toggleBtn=document.querySelector('#open-close');

//getting the year and placing inside the footer copyright year
let date= new Date().getFullYear();
let footerDate= document.getElementById('date');
footerDate.textContent=date;

//Adding the toggole functionality on the navbar for small screen devices
toggleBtn.addEventListener('click',(e)=>{
    const listContainerHeight= listContainer.getBoundingClientRect().height;
    const ulListHeight= ulList.getBoundingClientRect().height;
    if(listContainerHeight === 0){
        listContainer.style.height=`${ulListHeight}px`;
    }else{
        listContainer.style.height=0;
    }
});

//adding a fixed white background when we scroll
let arrowup= document.querySelector('.to-top');
let navbar= document.querySelector('.nav-bar');

window.addEventListener('scroll',()=>{
    let scrollHeight= window.scrollY;
    let navHeight=navbar.getBoundingClientRect().height;
    if(scrollHeight>navHeight){
        navbar.classList.add('fixed-navbar');
    }else{
        navbar.classList.remove('fixed-navbar');
    }  
    if(scrollHeight >500){
        arrowup.classList.add('show');   
    }else{
        arrowup.classList.remove('show'); 
    }
});

//adding the scroll to specific section
let barLinks= document.querySelectorAll('.scroll-links');
barLinks.forEach(AllLinks => {
    AllLinks.addEventListener('click',(e)=>{
        let id= e.currentTarget.getAttribute('href').slice(1);
        let element= document.getElementById(id); 
        let checkfixed= navbar.classList.contains('fixed-navbar');
        const ContainerHeight= listContainer.getBoundingClientRect().height;
        let navbarHeight= navbar.getBoundingClientRect().height;
        let position= element.offsetTop-navbarHeight;
    
        if(!checkfixed){
            position= position-navbarHeight
        }
        if(navbarHeight >70){
            position = position + ContainerHeight;
        }
        window.scrollTo({
            left:0,top:position,
        });
        listContainer.style.height=0;
        e.preventDefault();
    });
    
});
