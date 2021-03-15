const http = require('http');

const hostname = 'localhost';
const port = 3000;

let testingRoute = (response) => {

    let json = {
        FirstName: 'John',
        LastName: 'Doe',
        Age: 30,
        Gender: 'Male'
    }

    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(json));
}

let defaultRoute = (response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello World!');
}

let serverListener = (request, response) => {
    console.log(request.method);
    let url = request.url;

    if(url === '/testing'){
        testingRoute(response);
    }else{
        defaultRoute(response);
    }
}

const defaultHttpServer = http.createServer(serverListener);

defaultHttpServer.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}`);
})
