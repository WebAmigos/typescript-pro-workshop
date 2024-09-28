import { createServer, type IncomingMessage, type ServerResponse } from 'http';

const port = 3000;

const requestListener = (request: IncomingMessage, response: ServerResponse) => {
  if (request.method === 'GET' && request.url === '/') {
    response.writeHead(200, { 'Content-Type': 'application/json' });

    // Create a JavaScript object to send as JSON
    const responseObject = {
      message: 'Hello, World!',
      status: 'success',
    };

    // Convert the object to a JSON string and send it
    response.end(JSON.stringify(responseObject));
  } else {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('Not Found');
  }
};

const server = createServer(requestListener);

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
