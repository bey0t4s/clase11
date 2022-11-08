//creamos constantes para el backend
const http = require('http');
const port = 3000;
const host = '127.0.0.1';
const server = http.createServer(function(req, res){
    res.status = 200;
    res.end('hola mundo, soy backend');
});

server.listen(port, host, () => {
    console.log('backend trabajando para la app');
})

