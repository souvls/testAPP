const express = require('express')
const router = express.Router()
const path = require('path')
//express app

const app = express()
let port = process.env.PORT || 8080;
router.get("/",(req,res)=>{
    res.send("hello worl");
})

app.use(router)
const server = app.listen(port, () => {
    console.log("run server")
})
