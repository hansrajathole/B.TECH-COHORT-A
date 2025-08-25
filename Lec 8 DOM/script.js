

// let para1 = document.getElementById("one")
// let para2 = document.getElementById("two")
// console.log(para1);
// console.log(para2);



// let child1 = document.getElementsByClassName("child1")
// console.log(child1);


// let main = document.getElementsByTagName("main")
// console.log(main);


// let main = document.querySelector("main")
// let child1 = document.querySelector(".child1")
// let para1 = document.querySelector("#one")


// console.log(main);
// console.log(child1);
// console.log(para1);



// let para = document.querySelector("p")

// console.log(para.innerText);
// console.log(para.textContent);
// console.log(para.innerHTML);


// para.innerText = "hello world"
// para.textContent = "hello bhaiyo"
// let username = "Khushi" 
// para.innerText = `<h2>Hello ${username}</h2>`;
// para.innerHTML = `<h2>Hello ${username}</h2>`;

// console.log(para);

// para.style.backgroundColor = "red"
// para.style.color = "white"

// para.classList.add("para")
// para.classList.add("text")
// para.classList.remove("para")
// para.classList.toggle("para")

// let checked = para.classList.contains("para")
// console.log(checked);



let btn = document.querySelector("button")
let light = document.querySelector(".light")
let isTrue = false
btn.addEventListener("click", ()=>{
    if(isTrue){
        light.style.backgroundColor = "white"
        btn.innerText = "On"
        isTrue = false
    }else {
        light.style.backgroundColor = "yellow"
        btn.innerText = "Off"
        isTrue = true
    }
})