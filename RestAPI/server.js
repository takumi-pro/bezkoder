const express = require("express");
const app = express();
const port = 3000;
const axios = require('axios').default;

app.get("/", (req, res) => {
    res.send("hi");
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})