const { SitemapStream, streamToPromise } = require('sitemap')
const { Readable } = require('stream')
const { writeFileSync } = require('fs');
const path = require('path');

// An array with your links
const links = [
  { url: '/', changefreq: 'daily', priority: 0.3 },
  { url: '/projects', changefreq: 'daily', priority: 0.3 },
  { url: '/writings', changefreq: 'daily', priority: 0.3 },
];

const writePath = path.resolve(__dirname, 'public', 'sitemap.xml');

// Create a stream to write to
const stream = new SitemapStream({ hostname: 'https://mchouhan.co.in' })

// Return a promise that resolves with your XML string
streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
  data.toString()
).then(xmlString => writeFileSync(writePath, xmlString));