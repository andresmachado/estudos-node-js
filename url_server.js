var http = require('http');
var url = require("url");

var server = http.createServer(function(request, response){
	var pathname = url.parse(request.url).pathname
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("<h1>Dados da query string</h1>")
	response.write("<h2>" + pathname + "</h2>");
	response.end();
});
server.listen(3000, function(){
	console.log("Rodando 3000");
})
