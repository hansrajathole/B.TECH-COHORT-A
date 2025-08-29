let btn = document.querySelector("button")
let body = document.querySelector("body")

// btn.addEventListener("click", ()=>{
//     let img = document.createElement("img")

//     let imgSrc1 ="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     let imgSrc2 ="https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?q=80&w=714&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     let imgSrc3 = "https://plus.unsplash.com/premium_photo-1667030474693-6d0632f97029?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0fGVufDB8fDB8fHww" 
//     let imgSrc4 = "https://images.unsplash.com/photo-1561948955-570b270e7c36?q=80&w=2101&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


//     let imgSrcArr = [imgSrc1, imgSrc2, imgSrc3 , imgSrc4]

//     let ranNum = Math.floor(Math.random()*imgSrcArr.length)

//     img.src = imgSrcArr[ranNum]

//     let top = Math.random()*90
//     let left = Math.random()*90

//     img.style.position = "absolute"
//     img.style.top = top+"%"
//     img.style.left = left+"%"

//     body.append(img,img , img)
//     // body.prepend(img)
//     // body.appendChild(img,img , img)
//     // console.log(body);
    
// })



// btn.addEventListener("click", ()=>{
//     // let img = document.querySelector("img")
//     let h1 = document.querySelector("h1")
//     let div = document.querySelector("div")

//     // div.removeChild(h1)
//     // img.remove()

//     // let h2 = document.createElement("h2")
//     // h2.innerText = "Rani"

//     // div.replaceChild(h2, h1)


// })



// btn.addEventListener("click", (event)=>{
//     // console.log(event);
//     // console.log(btn.parentElement)
//     console.log(btn);
    
    
// })



let div = document.querySelector("div")

div.addEventListener("mouseenter", ()=>{
    // console.log(div.children);
    // console.log(div.firstElementChild);
    // console.log(div.firstChild);
    console.log(div.lastElementChild);
    
    
})