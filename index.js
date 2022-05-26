
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
    const $feed = document.querySelector('#feed');
    const $discovery = document.querySelector('#discover');

    data.forEach(picture =>{
        console.log(picture)
        $feed.innerHTML += `<div class="col-sm-12 col-md-9 col-xl-7 mx-auto" >
        <div class="bg-white my-4 my-xl-3">
           <div class="d-flex align-items-center justify-content-between py-2 mx-4">
               <h4>my title</h4>
               <span>18/05/2022</span>
           </div>
           <img id="post-image" class="w-100" src="${picture}" alt="picture"/>
           <div class="my-2 mx-4">
               <h6>254 likes</h6>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quam possimus, non nulla illo exercitationem incidunt reiciendis aliquid at? Aliquid!</p>
           </div>
           <div class="row mx-2 pb-3">
               <div class="col-1">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                       <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                     </svg>
               </div>
               <div class="col-9 col-sm-10">
                   <input class="border px-2 rounded w-100" type="text" placeholder="comment...">
               </div>
               <div class="col-1">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                       <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                     </svg>
               </div>
           </div>
        </div>  
        </div>`
    })
    
}

window.addEventListener("load",()=>{
    generatePost()
})




