let allReviews=[
    {
        id: 1,
        names: 'susan smith',
        career: 'web developer',
        images:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        reviews:
          "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
      },
      {
        id: 2,
        names: 'anna johnson',
        career: 'web designer',
        images:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
        reviews:
          'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
      },
      {
        id: 3,
        names: 'peter jones',
        career: 'intern',
        images:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        reviews:
          'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
      },
      {
        id: 4,
        names: 'bill anderson',
        career: 'the boss',
        images:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
        reviews:
          'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
      }
];
let personimg= document.querySelector('.personimg');
let img= document.createElement('img');
personimg.appendChild(img);
img.classList= 'image';

let personname= document.querySelector('#name');
let occupation= document.querySelector('.occupation');
let review= document.querySelector('.review');
let arrowback= document.querySelector('.back');
let arrowfoward= document.querySelector('.foward');

// Default display is the user with index of 0
let current=0;
function functionality(){
    personname.textContent= allReviews[current].names;
    occupation.textContent= allReviews[current].career;
    review.textContent= allReviews[current].reviews;
    img.src = allReviews[current].images;
}
window.addEventListener('load',(e)=>{
    functionality();
});

document.body.addEventListener('click', (e)=>{
    if(e.target.classList == 'foward'){  
        current++;
        if(current >allReviews.length-1 ){
            current = 0;
        } 
       functionality();
    } 
    else if(e.target.classList == 'back'){ 
      current--;
      if(current < 0){
        current= allReviews.length-1;
      }
       functionality();
    }
    else if(e.target.classList == 'btn'){
        current= random();
        functionality();
    }
    e.preventDefault();
});
function random(){
    let randomNo= Math.floor(Math.random()*allReviews.length);
    return randomNo;
}



