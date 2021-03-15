const express = require('express');

const app = express();
const port = 3000;
const hostname = 'localhost';

app.use('/testing', ((req, res, next) => {
    console.log('checking this middleware and hitting the server now');
    next();
    //res.send('you can not pass this wall').status(400);
}))

app.use('/', ((req, res, next) => {
    console.log('checking this middleware and hitting the server now 2');
    next();
    //res.send('you can not pass this wall').status(400);
}))

app.use('*', ((req, res, next) => {
    console.log('anything will have to go through me, I am the mighty here');
    res.send('you can not pass this wall').status(400);
}))

app.get('/', (req, res) => {
    console.log('Hitting default');
    res.send('Hello World').status(200);
})

app.get('/testing', (req,res) => {
    console.log('Hitting testing');
    let json = {
        FirstName: 'John',
        LastName: 'Doe',
        Age: 30,
        Gender: 'Male'
    }
    res.json(json);
})

app.listen(port, hostname, () => {
    console.log(`server is running on http://${hostname}:${port}`);
})
