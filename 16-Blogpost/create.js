
const form =document.querySelector('form');

const addBlog= async (e)=>{
    e.preventDefault();
    const CreatedBlog={
        title:form.title.value,
        body:form.body.value,
        likes:0
    }
    await fetch('http://localhost:3000/blogs',{
        method:'POST',
        body:JSON.stringify(CreatedBlog),
        headers:{'content-type':'application/json'}
    })

    window.location.replace('index.html');

}
form.addEventListener('submit',addBlog)


