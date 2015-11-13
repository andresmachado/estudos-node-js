var http  = require('http');
var url   = require('url');
var fs    = require('fs');

var server = http.createServer(function(request, response){
  var pathname = url.parse(request.url).pathname;

  if(pathname === "/contato.html"){
    fs.readFile(__dirname + pathname, function(err, html){
      if(err){
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("404 not found\n");
        throw (err);
      }else{
        response.writeHead(200, {"Content-Type": "text/html"})/
        response.write(html);
      }
      response.end();
    })
  } else if(pathname === "/artigos.html" || pathname === "/"){
    fs.readFile(__dirname + "/artigos.html", function(err, html){
      if(err){
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("404 not found\n");
        throw (err);
      }else {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(html);
      }
      response.end();
    })
  } else {
    fs.readFile(__dirname + "/erro.html", function(err, html){
      if(err){
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("404 Not Found\n");
        throw (err);
      }else {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(html);
      }
      response.end();
    })
  }
});
server.listen(3000, function(){
  console.log("listen on :3000");
})
