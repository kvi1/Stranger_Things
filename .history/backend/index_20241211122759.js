import express from "express";
import { PORT } from "./config.js";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get('/quiz', (req, res) => {
    fetch('https://strangerthingsquotes.shadowdev.xyz/api/quotes/5') // Fetch 5 random quotes
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            // Transform the quotes into quiz questions
            const quiz = data.map((quote, index) => ({
                question: `Who said this quote: "${quote.quote}"?`,
                answer: quote.author,
                options: [
                    quote.author,
                    `Random Character ${index + 1}`,
                    `Random Character ${index + 2}`,
                ], // Add distractors here
            }));
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
