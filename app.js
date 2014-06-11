var express = require('express'),
	app = express(), 
	router = express.Router();

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res)
{
    res.render('index.html');
});

app.listen(8086);