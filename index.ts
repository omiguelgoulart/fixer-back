import express from 'express'
import cors from 'cors'
import routesLogin from './routes/login'

const app = express()
const port = 3001

app.use(express.json())
app.use(cors())


app.use("/login", routesLogin)

app.get('/', (req, res) => {
  res.send('API: Fixer')
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})