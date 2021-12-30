const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

if (process.env.NODE_ENV === 'development') {
    console.log('in development.');
} else {
    console.log('in production.');
}

/* App Config */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')));


/* Server Initialization */
app.get('/', (req, res) => res.sendFile('index.html'));
var port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server initialized on: http://localhost:${port} // ${new Date()}`));