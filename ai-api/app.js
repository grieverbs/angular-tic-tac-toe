// https://expressjs.com/
const express = require("express");
const app = express();

app.listen(4201, (req, res) => {
    console.log("Listening on 4201");
});

// https://expressjs.com/en/4x/api.html#app.get
app.get("/test", (req, res) => {
    res.json({
        "statusCode": 200,
        "message": "HELLO WORLD"
    });
})