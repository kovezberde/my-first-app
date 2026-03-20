const express = require('express');
const app = express();
const PORT = 3000;

// Correct syntax for a GET route
app.get('/', (req, res) => {
    res.send('Hello KO!!!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
