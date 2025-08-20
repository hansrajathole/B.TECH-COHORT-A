// Callback Function
// function sum(a,b) {
//     return a+b
// }

// function fun(sum2) {
//    let ans = sum2(50,20)
//    console.log(ans);

// }

// fun(sum)

// Higher order Function
// function fun() {
//     console.log("start");
//     console.log("hello");

//     function sum(a,b) {
//         console.log(a+b);

//     }

//     return sum

// }

// let returnFun = fun()
// returnFun(10,20)
// console.log(returnFun);

// Closers
// function parent() {

//     let paisa = 50000
//     let jamin = 50
//     let car = "BMW"

//     function child() {
//         console.log(car);

//     }

//     return child
// }

// let bachha = parent()
// bachha()

// IIFE (Immediately Invoked Function Expression)

// (function () {
//     console.log("fisrt funcation")

// })();

// (function () {
//     console.log("second function")

// })()

// console.log("hello");
// console.log("kaise ho");
// setTimeout(()=>{
//     console.log("abe jaldi bol");
// },1000)
// setTimeout(()=>{
//     console.log("badhiaya hai");

// },2000)

// let timer = setInterval(()=>{
//     console.log("hello world");

// },2000)

// setTimeout(()=>{
//     clearInterval(timer)
//     console.log("stop ho gya ab ghr jao");

// },10000)

// let promise = new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         let num = Math.floor(Math.random()*2)

//         if(num === 1){
//             resolve("mai to loyal hu")
//         }else {
//             reject("time pass chal rha tha pgl")
//         }
//     },2000)
// })

// console.log(promise);
// promise.then((res)=>{
//     console.log(res);
//     console.log("uuhhhh maaaa");

// })
// .catch((err)=>{
//     console.log(err);
//     console.log("mai konsa serious tha 😅");

// })

async function getData() {
  try {
    let response = await fetch("https://dummyjso.com/users");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
    
  }
}

getData()