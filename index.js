const express = require('express');
const path = require('path');
const app = express();

// Menyajikan file statis langsung dari root folder
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/messages.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'messages.json'));
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server running at http://0.0.0.0:3000');
});
