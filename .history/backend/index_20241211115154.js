import express from "express";
import {PORT} from "./config.js";

const app = express();


app.get('/quiz', (req, res) => {
    fetch('https://strangerthingsapi.netlify.app/api/v1/characters')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const quiz = data
                .filter(char => char.nicknames && char.nicknames.length > 0) // Filter for nicknames
                .slice(0, 5) // Take 5 random characters
                .map(char => ({
                    question: `What is the nickname of ${char.name}?`,
                    answer: char.nicknames[0],
                    options: [...char.nicknames, 'Random Option 1', 'Random Option 2'], // Add distractors
                }));
            res.json(quiz);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            res.status(500).json({ error: 'Error fetching data' });
        });
});


app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
});

