import express from "express";
import { PORT } from "./config.js";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get('/quiz', (req, res) => {
    fetch('https://strangerthingsquotes.shadowdev.xyz/api/quotes/5')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error');
            }
            return response.json();
        })
        .then(data => {
            console.log('API Response Data:', data); 
            const quiz = data.map((quote, index) => ({
                question: `Who said this quote: "${quote.quote}"?`,
                answer: quote.author,
                options: [
                    quote.author,
                    `Dustin Henderson`,
                    `Mike Wheeler`,
                    `Will Byers`,
                ], 
            }));
            console.log('Generated Quiz:', quiz); 
            res.json(quiz);
        })
        .catch(error => {
            console.error('Error fetching data:', error.message);
            res.status(500).json({ error: error.message });
        });
});


app.listen(PORT, () => {
    console.log(`App is listening on port: ${PORT}`);
});
