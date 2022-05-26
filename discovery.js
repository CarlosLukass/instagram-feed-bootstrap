
const generatePost = async () => {
    const src = [];
    const response = await fetch('https://dog.ceo/api/breeds/image/random/30');
    const data = await response.json();
    data.message.forEach(element =>{
       src.push(element)
   })

   generateHTML(src)
}

const generateHTML = (data) =>{
    const $discovery = document.querySelector('#discover');
    data.forEach(picture =>{
        console.log(picture)
        $discovery.innerHTML += `<div class="col-sm-12 col-md-8 col-xl-4 mx-auto" >
        <div class="bg-white my-4 my-xl-3">
        
           <img id="post-image" class="w-100" src="${picture}" alt="picture"/>
           
        </div>  
        </div>`
    })
    
}

window.addEventListener("load",()=>{
    generatePost()
})




