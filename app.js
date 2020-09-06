const express = require('express')
const app = express()

app.get("/", (req, res) => {
    const a = 123;
    res.send("Hello Debug!")
});

app.listen(3000, () => {
    console.log("Listening to port 3000");
});