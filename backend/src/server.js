const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const env = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${env}` });

const PORT = process.env.PORT;
const FRONTEND_URL = process.env.FRONTEND_URL;

const posts = [
    {
        title: 'Building Great Software Series: Epilog',
        date: 'Jun 10, 2024',
        description: 'A Practical Exploration of AGILE Principles and Effective Software Development Practices',
        link: 'https://medium.com/@mchouhanofficial/building-great-software-series-epilog-b6638c556002',
        image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*ErrZhV-U0E811Jh7AgFQjQ.png', // Replace with your own image link if available
    },
    {
        title: 'Building Great Software Series: Chapter 1 — Gathering Requirements',
        date: 'Jun 12, 2024',
        description: 'A Practical Exploration of AGILE Principles and Effective Software Development Practices',
        link: 'https://medium.com/@mchouhanofficial/building-great-software-series-epilog-b6638c556002',
        image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*xZLKxfEt9U9Q9g8_XY9OlA.png', // Replace with your own image link if available
    },
    {
        title: 'SOLID Series: Chapter 1 — Single Responsibility',
        date: 'Feb 7, 2022',
        description: 'Learn the Single Responsibility Principle (SRP) for better software design, ensuring each class has one responsibility.',
        link: 'https://medium.com/enjoy-algorithm/deep-dive-into-single-responsibility-principle-1bf010dd373e',
        image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*kOPoncA4Tt1y-7HMxK2pAQ.jpeg'
    },
    {
        title: 'SOLID Series: Chapter 2 — Open Closed Principle',
        date: 'Feb 8, 2022',
        description: 'Explore the Open Closed Principle (OCP) to create software that is open for extension but closed for modification.',
        link: 'https://medium.com/enjoy-algorithm/the-open-closed-principle-in-oops-b9545669994a',
        image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*8oWXIac8XeCtcSVp-OfSSw.jpeg'
    },
    {
        title: 'SOLID Series: Chapter 3 — Liskov Substitution Principle',
        date: 'Feb 13, 2022',
        description: 'Understand the Liskov Substitution Principle (LSP) to ensure derived classes extend base classes without altering behavior.',
        link: 'https://medium.com/enjoy-algorithm/liskov-substitution-principle-in-oops-4aca30c4ccc8',
        image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*BevOlHJSs3OQNQwxeaTgTg.jpeg'
    },
    {
        title: 'SOLID Series: Chapter 4 — Interface Segregation Principle',
        date: 'Feb 2, 2024',
        description: 'Learn the Interface Segregation Principle (ISP) to avoid forcing clients to depend on methods they don\'t use.',
        link: 'https://medium.com/enjoy-algorithm/chapter-4-interface-segregation-principle-840a40f8e92d',
        image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*-im3gHdJqeJoVG0klP4d6w.png'
    },
    {
        title: 'SOLID Series: Chapter 5 — Dependency Inversion Principle',
        date: 'Feb 2, 2024',
        description: 'Understand the Dependency Inversion Principle (DIP) to reduce dependencies between high-level and low-level modules.',
        link: 'https://medium.com/enjoy-algorithm/chapter-5-dependency-inversion-principle-d616354e8b24',
        image: 'https://miro.medium.com/v2/resize:fit:640/format:webp/0*cgDgJB-t8sQXxTRA'
    },
    {
        title: 'Why Should we learn OOPS',
        date: 'Sep 23, 2021',
        description: 'Discover why learning Object-Oriented Programming (OOP) is essential for modern software development.',
        link: 'https://medium.com/enjoy-algorithm/why-should-we-learn-object-oriented-programming-7f6ef4babf0d',
        image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*d-ho2ab6JeUJg39Lljuxeg.jpeg'
    },
    {
        title: 'Basic Principles of OOPS',
        date: 'Sep 23, 2021',
        description: 'Understand the basic principles of Object-Oriented Programming (OOP) to enhance your coding skills.',
        link: 'https://medium.com/enjoy-algorithm/principles-of-object-oriented-programming-9854bc359a2e',
        image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*YT_hSygtq_ZUvDIL5tk7gw.png'
    },
    {
        title: 'Making Sense of Multitouch with RxJava',
        date: 'Aug 16, 2018',
        description: 'Learn the basics of reactive programming with RxJava for handling multitouch in Android apps.',
        link: 'https://medium.com/mindorks/making-sense-of-multitouch-with-rxjava-8d035e56f239',
        image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*202L6f5fVjBnMDDI.jpg'
    }
];


const app = express();

// Configure CORS
app.use(cors({
    origin: FRONTEND_URL, // Allow only your frontend domain
    optionsSuccessStatus: 200, // Some legacy browsers choke on 204
}));

app.get('/', (req, res) => {
    res.send('Hello After CI/CD correctly setup!');
});

app.get('/api/blogs', (req, res) => {
    res.send(posts);
});

app.listen(PORT, () => {
    console.log(`Server listening at ${PORT}, allowed origin : ${FRONTEND_URL}`);
});
