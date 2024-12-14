import express from "express";
import { PORT } from "./config.js";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get('/quiz', (req, res) => {
    fetch('https://strangerthingsquotes.shadowdev.xyz/api/quotes/5')
        .then(response => {
            console.log(`API Status: ${response.status}`); // Log API response status
            if (!response.ok) {
                throw new Error(`Failed to fetch: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('API Response Data:', data); // Log the fetched data
            const quiz = data.map((quote, index) => ({
                question: `Who said this quote: "${quote.quote}"?`,
                answer: quote.author,
                options: [
                    quote.author,
                    `Eleven ${index + 1}`,
                    `Dustin Henderson ${index + 2}`,
                    `Mike Wheeler ${index + 2}`,
                    `Will Byers ${index + 2}`,
                ], // Add distractors here
            }));
            console.log('Generated Quiz:', quiz); // Log the transformed quiz data
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
