const http = require('node:http');
const randomQuotes = require('random-quotes').default;

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const quote = randomQuotes(1);
  res.end(`${quote.body}\n${quote.author}\n`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});