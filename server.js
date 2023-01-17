const express = require('express');

const app = express();
const apiRoutes = require('C:\Users\aliba\code\bootcamp\homework\Note-Taker\routes\apiRoutes\index.js');
const htmlRoutes = require('C:\Users\aliba\code\bootcamp\homework\Note-Taker\routes\htmlRoutes\index.js');

const PORT = process.env.PORT || 3001;
// Parse URL encoded & JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Host public folder
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});