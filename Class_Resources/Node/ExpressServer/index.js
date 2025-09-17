// FOUNDATION
const express = require('express')
const app = express()
const port = process.env.PORT||3000;

app.get("/doggy", (req, res) => {
    res.send("hello worlds")
})




app.listen(port,console.log(`Express server is running on port ${port}`))