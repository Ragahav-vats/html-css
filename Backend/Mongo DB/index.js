const express = require('express');
const mongodb = require('mongodb');
const {} = require('./Controllers/color');
const {  } = require('./Controllers/material');
const { create, view, details, update, destroy } = require('./Controllers/form');



const server = express();

server.use(express.json());

server.use(express.urlencoded({ extended : true }));

server.get('/', (request,response) => {
    response.send('server is working');
});

// server.get('/api/color/create',create);
// server.get('/api/color/view',view);
// server.get('/api/color/details/:id',details);
// server.get('/api/color/update/:id',update);
// server.get('/api/color/delete/:id',destroy);

// server.post('/api/material/create',create);
// server.post('/api/material/view',view);
// server.post('/api/material/details/:id',details);
// server.put('/api/material/update/:id',update);
// server.delete('/api/material/delete/:id',destroy);

server.post('/api/form/create',create);
server.post('/api/form/view',view);
server.post('/api/form/details/:id',details);
server.put('/api/form/update/:id',update);
server.delete('/api/form/delete/:id',destroy);


server.listen(5000 , () => {
    console.log('server is working properly !!');
});