// console.log('Hello no deamon');

const fs = require('fs');
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');
const topicRouter = require('./routes/topic.js');
const indexRouter = require('./routes/index.js');
const express = require('express');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
app.use(express.static('public'));
app.use(helmet());

app.get('*', function (request, response, next) {
    fs.readdir('./data', function (error, filelist) {
        request.list = filelist;
        next();
    });
});

app.use('/topic', topicRouter);
app.use('/', indexRouter);

app.use(function (req, res, next) {
    res.status(404).send('Sorry cant find that!');
});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Somthing broke!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});