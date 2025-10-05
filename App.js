import http from 'http';
import fs from 'fs'
const server=http.createServer((req,res)=>{
const url=req.url;
const method=req.method;
if(req.url==='/'){
    res.setHeader('content-Type','text/html')
    res.end(     
        ` 
         <form>
        <label>name:</label>
        <input type="text" name="username"></input>
        <button type="submit">add</button>
        </form>
        `
    )}
    else {
        if(url==='/message'){
           let body=[];
           req.on('data',(chunks)=>{
            body.push(chunks)

           });
           req.on("end",()=>{
            let buffer=Buffer.concat(body)
            console.log(buffer)
            let formdata=buffer.toString();
            console.log(formdata)
            const formvalues=formdata.split('')[1]
            fs.writeFile('formvalues.txt',formvalues,(error)=>{
res.statusCode=302//status error
res.setHeader('Location','/')
res.end();
            })


           })

        }
    }
})
server.listen(3003,()=>{
console.log("server is running")
})




