import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import winston from 'winston';
import dotenv from 'dotenv';
import RSSParser from 'rss-parser';
import { load } from 'cheerio'; 

// setup enviornment variables
const env = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${env}` });

// Setup logger
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'npm-debug.log' }),
    ],
});

const fetchMediumPostsFromRSS = async () => {
    const parser = new RSSParser();
    const feed = await parser.parseURL('https://medium.com/feed/@mchouhanofficial');
    return feed.items.map(item => {
        const contentParser = load(item['content:encoded']);
        const image = contentParser('img').attr('src'); // Select the first image and get its 'src' attribute
        return {
            title: item.title,
            link: item.link,
            description: item.contentSnippet,
            date: item.pubDate,
            image: image || '', // Default to an empty string if no image is found
        };
    });
};


const app = express();

// Security middlewares
app.use(helmet());
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000', // Allow frontend domain or localhost fallback
    optionsSuccessStatus: 200, 
}));

// Logging middlewares
app.use((req, res, next) => {
    logger.info({
        method: req.method,
        url: req.url,
        timestamp: new Date().toISOString(),
    });
    next();
});

app.get('/', (req, res) => {
    const now = new Date();
    res.send(`Hello from Api Server, the current time is : ${now.toString()}!`);
});

app.get('/api/blogs', async (req, res) => {
    try {
        const posts = await fetchMediumPostsFromRSS();
        res.send(posts);
    } catch (error) {
        logger.error('Error fetching blogs:', error);
        res.status(500).send({ error: 'Failed to fetch blogs' });
    }
});

app.listen(process.env.PORT || 3001, () => {
    logger.info(`Server listening at ${process.env.PORT || 3001}, allowed origin : ${process.env.FRONTEND_URL || 'http://localhost:3000'}`);
});
