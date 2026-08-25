const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

app.get('/api/balance', (req, res) => {
    // ተጠቃሚው የተመዘገበበት ቦነስ 10 ብር እንዲያሳይ
    res.json({ balance: 10.00 });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
