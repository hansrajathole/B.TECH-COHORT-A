const http = require("http")

let server = http.createServer((req, res)=>{
    if(req.url === "/"){
        res.end("Home page")
    }
    if(req.url === '/about'){
        res.end("About page")
    }
    if(req.url === "/contact"){
        res.end("Contact page")
    }
})


server.listen(3000 , ()=>{
    console.log("server is running");
    
})