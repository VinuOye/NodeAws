const express = require('express');
const app = express();
const port = 8081;
//app.set('port', 8081);
app.get('/', (req, res) => res.send('Hello World 1..2...3... !'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
