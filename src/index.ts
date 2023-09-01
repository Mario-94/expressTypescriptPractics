import express from 'express'
const app = express()
app.use(express.json()) /* middleware que transofmra la req.bopdy a un json */
const PORT = 3000
app.get('/ping', (_req, res) => { /* _req con el guion bajo ignoro el parametro */
    console.log('someone pinged  here!!')
    res.send("pong")
})
app.listen(PORT, () => { console.log(`some running on port ${PORT}`) })