const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    if(req.url === '/' && req.method === 'GET'){
        res.setHeader('Content-Type', 'text/html')
        res.end(fs.readFileSync('./index.html', 'utf-8'))

    }


}).listen(3000, console.log('Server on at port 3000'))
