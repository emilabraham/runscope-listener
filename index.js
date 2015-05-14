var app = require('http').createServer(handler);

app.listen(3001);

function handler (request, response) {
  var data = '';

  // Collect chunk by chunk
  request.on('data', function(chunk) {
    data += chunk;
  });

  // Store relevant runscope data
  request.on('end', function() {
    console.log('Received body data: ');
    console.log('Here is the data: ', data);
    var parsed = JSON.parse(data);
    var testName = parsed.test_name;
    var bucketKey = parsed.bucket_key;
    var result = parsed.result;
    var start = parsed.started_at;
    var finish = parsed.finished_at;
    var payload = {
      testName: testName,
      bucketKey: bucketKey,
      result: result,
      start: start,
      finish: finish
    }
    console.log(payload);
  });

  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end();
}

console.log('Listening to port 3001');
