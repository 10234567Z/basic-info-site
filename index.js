const http = require('node:http')
const fs = require('node:fs')
const url = require('node:url')

http.createServer((req, res) => {
    if (url.parse(req.url, true).pathname !== '/favicon.ico' && url.parse(req.url, true).pathname !== '/') {
        let filename = url.parse(req.url, true).pathname.slice(1) + '.html';
        res.writeHead(200 , { 'Content-Type' : 'text/html' })
        console.log(filename)
        return res.end()
    }
    else if(url.parse(req.url, true).pathname === '/'){
        fs.readFile('index.html' , 'utf-8' , (err , data) => {
            if(err){
                res.writeHead(404 , { 'Content-Type' : 'text/html' })
                res.write('Error')
                return res.end()
            }
            res.writeHead(200 , { 'Content-Type' : 'text/html' })
            res.write(data)
            return res.end()
        })
    }
}).listen(8080)