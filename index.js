var app = require('http').createServer(handler);

app.listen(3000);

function handler (request, response) {
  var data = '';

  if (request.method == "POST") {
