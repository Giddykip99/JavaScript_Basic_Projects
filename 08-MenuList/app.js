const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "afternoon",
      price: 18.99,
      img: "./images/pizza.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
  ];
 let theMenu= document.querySelector('.theMenu');
 let buttons= document.querySelector('.buttons');

//on page load this event listener displays all data on the screen
 window.addEventListener('load',()=>{
    CreatItemsToDisplay(menu);
    addBtn(menu);
 });

 //function that adds the data from the array of objects into the screen
 function CreatItemsToDisplay(menuItems){
    let displayItems= menuItems.map((items)=>{
        let result=`
        <div class="food">
            <div class="allAbot">
            <div class="image">
                <img src=${items.img} alt="">
            </div>
             <div class="description">
                <div class="name-price">
                    <div class="name">
                        <h4 class="name">${items.title}</h4>
                    </div>
                    <div class="price1">
                         <p class="price">$${items.price}</p>
                    </div>
                </div>
                <div class="line2"></div>
                <div class="about-food">
                    <p>${items.desc} </p>
                 
                </div>
             </div>
    
            </div>
        </div>`;
        return result;
     });
     let itemsToBeDisplayed=displayItems.join(' ');
     theMenu.innerHTML=itemsToBeDisplayed;
 }

 //function that adds buttons to the screen and also events to the buttons

 function addBtn(menuCategory){
  let uniqueCategories= menuCategory.reduce((value,item)=>{
    if(!value.includes(item.category)){
      value.push(item.category);
    }
    return value;

  },['All']);
  
 let btns=uniqueCategories.map((items)=>{
   //this event listeners take events from various buttons representing caregory
 document.body.addEventListener('click',(e)=>{
  if(e.target.id == `${items}`){
      let breakFast = menu.filter(breko => breko.category ==`${items}`
      );
      CreatItemsToDisplay(breakFast);
  }
  if(e.target.id == 'All'){
    CreatItemsToDisplay(menu);
   
}
});
    return `<button id= ${items}>${items}</button>`
  });
  let allbtns= btns.join(' ');
  buttons.innerHTML=allbtns;
  
 }














