
const blog_container=document.querySelector('.blogs');
let allblog='';

async function displayContent(){
    const res= await fetch('http://localhost:3000/blogs?_sort=likes&_order=desc');
    const blogs=await res.json();
   
blogs.forEach((blog)=>{
   allblog +=`<div class="blog1">
   <h2 class="title">${blog.title}</h2>
   <p class="likes"><small>${blog.likes} Likes</small></p>
   <p class="blog-body">${blog.body.slice(0,150)}</p>
   <a href="details.html?id=${blog.id}">Read more</a>
</div>`;
});
blog_container.innerHTML=allblog;
}

window.addEventListener('DOMContentLoaded',()=>displayContent());

