const PORT = 8080;

const express = require('express');
const app = express();



//Basic homepage with form to upload CSV file
app.get('/', (req, res) => {
  	res.write("hello world");
    res.end();
});

//Start server
app.listen(PORT, () => {
  	console.log('React app listening on port ' + PORT);
});
