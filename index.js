var StringBuilder = require('ns-string-builder');
var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
    var sb = new StringBuilder();
    sb
        .cat('<html>')
        .cat(
            '<head>',
            ['<title>', 'Demo String Builder', '</title>'],
            ['<script src="js/string-builder.js">', '</script>'],
            '</head>'
        )
        .cat('<body>')
        .wrap('<h1>', '</h1>')
        .cat('Hello String-builder!!')
        .end()
        .cat('<div id="content">', "</div>")
        .cat(['<script src="js/main.js">', '</script>'])
        .cat('</body>')
        .cat('</html>')

    res.send(sb.string());
});

app.listen(3000, function() {
    console.log('Listening on port 3000!.')
});
