const express = require('express')
const app = express();
const port = 80;
app.use(express.static('sample/hello-world/'));
app.use(express.static('lib/'));
app.listen(port, () => console.log(`static server on ${port}!`))