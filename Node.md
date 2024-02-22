# Node.js

Node.js is a JavaScript runtime environment allowing execution of JavaScript code outside of a web browser. This makes it possible to use JavaScript for server-side scripts to produce dynamic web content before the page is sent to the user's web browser. Node.js follows a "JavaScript everywhere" paradigm, unifying web application development around a single programming language rather than using different languages for server and client side.

Node.js uses V8 to compile JavaScript code to native machine code at runtime.

## Key features

- **Asynchronous and Event-Driven**: Node.js libraries are asynchronous, meaning operations don't block the system. Node.js uses an event-driven model that makes it suitable for scalable applications.
- **Single-Threaded but Scalable**: Node.js operates on a single thread, using non-blocking I/O calls, allowing it to support thousands of concurrent connections without the cost of thread context switching.

## Create web server
Below is a simple example of a Node.js program that creates a web server. This server listens on port 3000 and sends "hello world" to the browser.

```js
// http module
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    // res.end concludes the response.
    // use res.end to send greeting back to user
    res.end('hello world\n');
});

// listen on port
const hostname = '127.0.0.1';
const port = 3000;

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
```

## Read and write asynchronously
This example uses the `fs` (File System) module, one of the core modules of Node.js for working with the file system.

```js
// fs Node.js module
const fs = require('fs');

// path to the file to write to and read from
const filePath = 'example.txt';

// dummy data
const data = 'Hello, this is a test file.';

// async write to file
fs.writeFile(filePath, data, (err) => {
    if (err)
        throw err;

    console.log('File has been successfully written');

    // asynchronously read file
    fs.readFile(filePath, (err, data) => {
        if (err)
            throw err;
        console.log('Read from file:', data);
    });
});
```

## `net` module to create TCP server and client
To connect to the server as a client, run `node tcpClient.js` in another terminal while the server is still running.

```js
// net Node.js module
const net = require('net');

// connect to server on port 3000 and send a log message
const client = net.connect({ port: 3000 }, () => {
    console.log('Connected to server');
});

// receive data from the server
client.on('data', (data) => {
    console.log(data.toString());
    // close the client connection
    client.end();
});
```
