var express = require('express');
var mongoose = require('mongoose');
app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb://localhost:27017/meandb');
mongoose.model('tarefas', {descricao: String});

app.get('/', function(req, res) {
	mongoose.model('tarefas').find(function(err, tarefas) {
		res.send(tarefas);
	});
})

app.get('/:id', function(req, res) {
	mongoose.model('tarefas').find({_id: req.params.id}, function(err, tarefa) {
		res.send(tarefa);
	});
})


app.listen(3000, function() {
	console.log('Server is running at localhost:3000');
});