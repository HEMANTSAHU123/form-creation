import http from 'http';
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
            res.setHeader('Content-type','text/html');
            let datachunks=[];
            req.on('data',(chunks)=>{
                console.log(chunks)
                datachunks.push(chunks)
            })
            req.on('end',()=>{
                let combinedbuffer=Buffer.concat(datachunks)
                console.log(combinedbuffer.toString())
                let value=combinedbuffer.toString().split("=")
                console.log(value)

            })
        }
    }
})
server.listen(302,()=>{
console.log("server is running")
})




