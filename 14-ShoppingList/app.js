const inputValue= document.getElementById('value');
const formField= document.getElementById('form-submit');
const ShoppingList= document.querySelector('.list-container');
const clearbtn= document.querySelector('.clear');
const submitbtn= document.querySelector('#btn');
const alertMessage= document.querySelector('.alert');

let editElement;
let editflag= false;
let editID='';
let  ourValues;

/***** EVENT LISTENERS ******/
//the event submits the input values and displays them
formField.addEventListener('submit',addItem);

//the event clears everything on the console
clearbtn.addEventListener('click',clearItems);

//Loading items on the window
window.addEventListener('load',setItems);

/***** ALL FUNCTIONS ******/

//this function adds the inputs and displays them
function addItem(e){
    e.preventDefault();
    const valueEnterd= inputValue.value;
    const id= new Date().getTime().toString();

    if(valueEnterd && !editflag){
    displayItems(id,valueEnterd);
    alertmsg('Item Succesfully Added','success');
    setToDefault();
    addToLocalStorage(id,valueEnterd);

    } else if(valueEnterd && editflag){
        editElement.innerHTML=valueEnterd;
        alertmsg('Value changed','success');

        //editing in the localstorage
        editLocalStorage(editID,valueEnterd);
        setToDefault();
     

    } else{
        alertmsg('Please Enter a value','danger');
    }
}

//this functions clears all the items in the screen
function clearItems(){
    let allItems= document.querySelectorAll('.specificItem');
    if(allItems.length > 0){
        allItems.forEach(element => {
            ShoppingList.removeChild(element);  
        });
    }   
    clearbtn.classList.remove('show');
    ShoppingList.classList.remove('show-container');
    alertmsg('All Items Cleard','danger');
    setToDefault();
    localStorage.removeItem('shoppingList');
}

//function to set everything to default
function setToDefault(){
 editflag= false;
 submitbtn.textContent='Submit';
 inputValue.value='';
 editID='';

}

//function to delete a specific item
function deleteOneItem(e){
    e.preventDefault();
    let ourTarget=e.currentTarget.parentElement.parentElement.parentElement;
    const id= ourTarget.dataset.id;
    ShoppingList.removeChild(ourTarget);
    if(ShoppingList.children.length ===0){
        ShoppingList.classList.remove('show-container');
        clearbtn.classList.remove('show');

    }
    alertmsg('Item Removed','danger');
    setToDefault();
    removefromLocalStorage(id);
}

//function that allows us to edit
function editOneItem(e){
    let ourTarget=e.currentTarget.parentElement.parentElement.parentElement;
    editElement= e.currentTarget.parentElement.previousElementSibling;

    //changing the default values set previously
    inputValue.value= editElement.innerHTML;
    editflag= true;
    submitbtn.textContent='Edit';
    editID=ourTarget.dataset.id;

}

//alert messages function
function alertmsg(string,type){
    alertMessage.textContent=string;
    alertMessage.classList.add(`alert-${type}`);

    setTimeout(() => {
        alertMessage.textContent='';
        alertMessage.classList.remove(`alert-${type}`);
        
    }, 1200);
}

/***** LOCAL STORAGE ******/

//this function adds the value enterd to the local storage
function addToLocalStorage(id,valueEnterd){
    const myItem={id:id,valueEnterd:valueEnterd};
    let items= getDataFromLocalStorage();
    items.push(myItem);
    localStorage.setItem('shoppingList',JSON.stringify(items));
}

//this function removes one deleted item from local storage
function removefromLocalStorage(id){
    let items= getDataFromLocalStorage();
    items= items.filter((item)=>{
        if(item.id !== id){
            return item;
        }
    });
    localStorage.setItem('shoppingList',JSON.stringify(items));
}

//this function edits the local storage when a value is edited
function editLocalStorage(editID,valueEnterd){
    let items= getDataFromLocalStorage();
    items= items.map(item => {
        if(item.id === editID){
            item.valueEnterd=valueEnterd;
        }
        return item;
        
    });
    localStorage.setItem('shoppingList',JSON.stringify(items));
}

//getting data from localstorage
function getDataFromLocalStorage(){
    return localStorage.getItem('shoppingList')?JSON.parse(localStorage.getItem('shoppingList')):[];
}

//function display on the screen
function displayItems(id,valueEnterd){
    let articalTag= document.createElement('article');
    articalTag.classList.add('specificItem');
    const attr= document.createAttribute('data-id');
    attr.value=id;
    articalTag.setAttributeNode(attr);
    articalTag.innerHTML=`
<div class="itemList">
    <li>${valueEnterd}</li>
    <span>
        <button class="edit"><i class="fa-solid fa-edit"></i></button>
        <button class="delete"><i class="fa-solid fa-trash" ></i></button>
    </span>
</div>`;
ShoppingList.appendChild(articalTag);
ShoppingList.classList.add('show-container');
clearbtn.classList.add('show');
const deleteBtn= articalTag.querySelector('.delete');
const editBtn= articalTag.querySelector('.edit');
deleteBtn.addEventListener('click', deleteOneItem);
editBtn.addEventListener('click', editOneItem);
}

//function to setup localStorage items on the screen when the page loads

function setItems(){
    let items=getDataFromLocalStorage();
    if(items.length>0){
        items.forEach((item)=>{
            displayItems(item.id,item.valueEnterd);
        })
        ShoppingList.classList.add('show-container');
    }
}
