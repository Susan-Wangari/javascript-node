//first way to include ecma script in node
// import http from 'http';
//second way to include ecma script in node
import{createServer} from 'http';
const  server = createServer((req, res) => { //eliminated http
    res.end('Hello from Node');
});

server.listen(4242, () => {
    console.log('server is running');
});