// server.js
import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(cors());

// Map origins to image filenames
const originToImage = {
    'http://localhost:5500': 'example.jpg',
    'http://localhost:5501': 'another.jpg',
};

// Default image if no match
const defaultImage = 'default.jpg';

app.get('/image', (req, res) => {
    // Check Origin header first, fallback to Referer
    const origin = req.get('Origin') || req.get('Referer') || '';

    let imageFile = defaultImage;

    for (const [allowedOrigin, file] of Object.entries(originToImage)) {
        if (origin.startsWith(allowedOrigin)) {
            imageFile = file;
            break;
        }
    }

    res.sendFile(path.join(__dirname, 'images', imageFile));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
