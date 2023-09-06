const express = require('express')
const router = express.Router()
const path = require('path')
//express app

const app = express()

//dynamic file
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

let port = process.env.PORT || 8080;
router.get("/",(req,res)=>{
    res.render("index")
})

app.use(router)
app.listen(port, () => {
    console.log("run server")
})
