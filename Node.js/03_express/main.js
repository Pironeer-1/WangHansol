// console.log('Hello no deamon');

var express = require('express'); //express도 결국 모듈
var app = express();
var fs = require('fs');
var path = require('path');
var sanitizeHtml = require('sanitize-html');
var template = require('./lib/template.js');
var qs = require('querystring');
var bodyParser = require('body-parser');
var compression = require('compression');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());

app.get('*', function(req, res, next) {
    fs.readdir('./data', function(err, filelist) {
        req.list = filelist;
        next()
    });
});

app.get('/', function(req, res, next) { //첫 번째 인자에는 경로, 두 번째 인자에는 콜백 함수

    var title='Welcome'
    var description = 'Hello, Node.js'
    var list = template.list(req.list)
    var html = template.HTML(title, list,
        `<h2>${title}</h2>${description}`,
        `<a href="/create">create</a>`
    );
    res.send(html);

});

app.get('/page/:pageId', function (req, res) {

    var filteredId = path.parse(req.params.pageId).base;
    fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
        var title = req.params.pageId;
        var sanitizedTitle = sanitizeHtml(title);
        var sanitizedDescription = sanitizeHtml(description,{
            allowedTags:['h1']
        });
        var list = template.list(req.list);
        var html = template.HTML(sanitizedTitle, list,
            `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`,
            `<a href="/create">create</a>
                <a href="/update/${sanitizedTitle}">update</a>
                <form action="/delete_process" method="post">
                    <input type="hidden" name="id" value="${sanitizedTitle}">
                    <input type="submit" value="delete">
                </form>`
        );
        res.send(html);
    });
});

app.get('/create', function(req, res) {

    var title ='Web create'
    var list = template.list(req.list);
    var html = template.HTML(title, list, `
        <form action="/create_process" method="post">
            <p><input type="text" name="title" placeholder="title"></p>
            <p>
                <textarea name="description" placeholder="description"></textarea>
            </p>
            <p>
                <input type="submit">
            </p>
        </form>
    `, '');
    res.send(html);
});

app.post('/create_process', function(req, res) {
    var post =req.body;
    var title = post.title;
    var description = post.description;
    fs.writeFile(`data/${title}`, description, 'utf-8', function (err) {
        response.writeHead(302, {Location: `/?id=${title}`});
        response.end();
    });
});

app.get('/update/:pageId', function (req, res) {
    fs.readdir('./data', function(err, filelist){
        var filteredId = path.parse(req.params.pageId).base;
        fs.readFile(`data/${filteredId}`, 'utf-8', function(err, description){
            var title = req.params.pageId
            var list = template.list(filelist)
            var html = template.HTML(title, list, `
            <form action="/update_process" method="post">
                <input type="hidden" name="id" value="${title}">
                <p><input type="text" name="title" placeholder="title"></p>
                <p>
                    <textarea name="description" placeholder="description"></textarea>
                </p>
                <p>
                    <input type="submit">
                </p>
            </form>
            `,
            `<a href="/create">Create</a> <a href="/update/${title}">Update</a>`
            );
            res.send(html);
        });
    });
});

app.post('/update_process', function(req, res) {
    var post =req.body;
    var id = post.id;
    var title = post.title;
    var description = post.description;

    fs.rename(`data/${id}`, `data/${title}`, function(err){
        fs.writeFile(`data/${title}`, description, 'utf-8', function (err) {
            res.redirect(`/?id=${title}`);
        });
    });
});

app.post('/delete_process', function(req, res) {

    var post = req.body;
    var id = post.id;
    var filteredId = path.parse(id).base;
    fs.unlink(`data/${filteredId}`, function(err){ //파일 삭제
        res.redirect('/');
    });
});

app.listen(3000, function() {console.log('Example app listening on port 3000')
    });