const express = require('express')
const app = express()

app.use(express.static('./public'))
 
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirnane,'./public/index.html'))
})
 
const port = 3000

app.listen(port,()=>{
    console.log('Listenning...')
})