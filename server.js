const express = require('express');
const app = express();
const PORT = 8000;

const rappers = {
    '21 savage': {
        age: 29,
        birthName: 'Sheyaa Bin Abrahan-Joseph',
        birthLocation: 'London, England'
    },
    'chance the rapper': {
        age: 28,
        birthName: 'Chancelor Bennett',
        birthLocation: 'Chicago, Illinois'
    },
    'unknown': {
        age: 0 ,
        birthName: 'Unknown',
        birthLocation: 'Unknown'
    }
};

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

app.get('/api/:name', (request, response) => {
     let rapperName = request.params.name.toLowerCase();
     if (rappers[rapperName]){
        response.json(rappers[rapperName]);
     }else{
        response.json(rappers['unknown']);
     }
    
});

app.listen(PORT, () => {
    console.log(`The server is listening on port: ${PORT}`);
});