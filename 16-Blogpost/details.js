
const id= new URLSearchParams(window.location.search);
const ourid=id.get('id');
const specificBlog=document.querySelector('.specific-blog');

let postBlog='';

async function postSpecificBlog(){
const res= await fetch(`http://localhost:3000/blogs/${ourid}`);
const blogs=await res.json();

const postBlog =`<h1>${blogs.title}</h1>
<p>${blogs.body}</p>
<button class="btn2">Delete</button>`
specificBlog.innerHTML=postBlog;
const deleteBtn=document.querySelector('.btn2');
deleteBtn.addEventListener('click',deleteBlog);
}
postSpecificBlog();
const deleteBlog= async ()=>{
    await fetch(`http://localhost:3000/blogs/${ourid}`,{
        method:'DELETE'
    });
    window.location.replace('index.html');

}



