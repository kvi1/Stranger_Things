import express from "express";
import {PORT} from "./config.js";
const fetch = require('node-fetch');

const app = express();




app.get('/quiz', (req, res) => {
    fetch('https://strangerthingsapi.netlify.app/api/v1/characters')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error');
            }
            return response.json();
        })
        .then(data => {
            const quiz = data
                .filter(character => character.nicknames && character.nicknames.length > 0)
                .slice(0, 5) 
                .map(character => ({
                    question: `What is the nickname of ${character.name}?`,
                    answer: character.nicknames[0],
                    options: [...character.nicknames, 'Random Option 1', 'Random Option 2'], 
                }));
            res.json(quiz);
        })
        .catch(error => {
            console.error('Error');
            res.status(400).json({'Error fetching data': error.message });
        });
});


app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
});

