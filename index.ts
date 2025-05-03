import express from 'express'
import cors from 'cors'
import plantaRouter from './routes/ativo/planta';
import areaRouter from './routes/ativo/area';
import sistemaRouter from './routes/ativo/sistema';
import ativoRouter from './routes/ativo/ativo';
import subativoRouter from './routes/ativo/subAtivo';

const app = express()
const port = 3001

app.use(express.json())
app.use(cors())


app.use('/planta', plantaRouter);
app.use('/area', areaRouter);
app.use('/sistema', sistemaRouter);
app.use('/ativo', ativoRouter);
app.use('/subativo', subativoRouter);

app.get('/', (req, res) => {
  res.send('API: Fixer')
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})