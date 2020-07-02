function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

const rqHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title> James\'s Server </title></head>');
        res.write('<body><h1> Welcome to My Server</h1><form action="/create-user" method ="POST"><input name="username type="text" placeholder="username"><button> Submit </button></form> </body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/Users') {
        res.write('<html>');
        res.write('<head><title> James\'s Server </title></head>');
        res.write('<body> <ul> <li> James </li> <li> Laquiesha </li> <li> Neeko/Milla </li> </body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/user-added') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title> James\'s Server </title></head>');
        res.write('<body> User Has Been Added! </body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        });

        req.on('end', () => {
            const detail = Buffer.concat(body).toString();
            let message = detail.split('=')[1];
            console.log(message);
        });

        res.statusCode = 302;
        res.setHeader('Location', '/user-added');
        res.end();
    }
}


module.exports = rqHandler;