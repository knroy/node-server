const http = require('http');

const hostname = 'localhost';
const port = 3000;

function Express() {
    this.routes = [];
    this.middlewares = [];
}

Express.prototype.get = function (routeName, callback) {
    this.routes.push({
        method: 'GET',
        routeName: routeName,
        callBack: callback
    })
}

Express.prototype.post = function (routeName, callback) {
    this.routes.push({
        method: 'POST',
        routeName: routeName,
        callBack: callback
    })
}

Express.prototype.use = function (routeName, callback) {
    this.middlewares.push({
        routeName: routeName,
        callBack: callback
    })
}

Express.prototype.listen = function (port, hostname, callback) {

    let serverListener = (request, response) => {

        let url = request.url;
        let reqMethod = request.method;

        let foundRoute = false;

        for (const route of this.routes) {
            if (route.method === reqMethod && route.routeName === url) {
                foundRoute = true;
                route.callBack(request, response);
                break;
            }
        }

        if (!foundRoute) {
            response.statusCode = 404;
            response.end(`${url} can not ${reqMethod}`);
        }

    }

    const defaultHttpServer = http.createServer(serverListener);
    defaultHttpServer.listen(port, hostname, () => {
        callback();
    })

}

let app = new Express();

app.get('/', (request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello to node server');
})

app.post('/testing', (request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello from testing route');
})

app.listen(port, hostname, () => {
    console.log(`server is running on http://${hostname}:${port}`);
})




