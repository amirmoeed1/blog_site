const express = require('express')
require('./db/db')
const Blog = require('./db/model/schema') 
const multer = require('multer')
const app = express()

app.use(express.json())
app.use(express.static('./newblog/server/images'))

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './newblog/server/images/')
    },
    filename: function (req, file, cb) {
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

app.post('/createpost', upload.single('images'), async (req, res) => {
    try {
        let newblog = req.body    
        newblog.images = "/" + req.file.originalname
        let blogpage = new Blog(newblog)
        await blogpage.save()
        res.json({ success: true })
    } catch (error) {
        console.log(error)
    }
})

app.get('/home', async (req, res) => {
    let blogs = await Blog.find()
    res.json({ blogs })
})

const port = 8000

app.listen(port, () => {
    console.log('app listening on port', port)
})
