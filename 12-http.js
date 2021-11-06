const http = require('http');

const server = http.createServer((req, res)=> {
    //console.log(req);
    if(req.url === '/') {
        res.end('Welcome to our home page');
    }

    if (req.url === '/about') {
        res.end("here i our short history");
    }

    res.end(`<h1>Oppos</h1> <p> we can't seem</p><href> Backhome`)
});

server.listen(5000);
