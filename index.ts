<<<<<<< Updated upstream
import express from "express";
import cors from "cors";
=======
import express from 'express'
import cors from 'cors'
import plantaRouter from './routes/ativo/planta';
import areaRouter from './routes/ativo/area';
import sistemaRouter from './routes/ativo/sistema';
import ativoRouter from './routes/ativo/ativo';
import subativoRouter from './routes/ativo/subAtivo';
import usuariosRouter from './routes/usuario';
import loginRouter from './routes/login';
import tarefaRouter from './routes/planejamento/tarefa';
import ordemServicoRouter from './routes/planejamento/ordemServico';
import IsumoRouter from './routes/planejamento/insumo';
import authRouter from './routes/auth';
import dashboardRouter from './routes/dashboard';
>>>>>>> Stashed changes

import plantaRouter from "./routes/ativo/planta";
import areaRouter from "./routes/ativo/area";
import sistemaRouter from "./routes/ativo/sistema";
import ativoRouter from "./routes/ativo/ativo";
import subativoRouter from "./routes/ativo/subAtivo";
import usuariosRouter from "./routes/usuario";
import loginRouter from "./routes/login";
import tarefaRouter from "./routes/planejamento/tarefa";
import ordemServicoRouter from "./routes/planejamento/ordemServico";
import IsumoRouter from "./routes/planejamento/insumo";
import authRouter from "./routes/auth";

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.use("/planta", plantaRouter);
app.use("/area", areaRouter);
app.use("/sistema", sistemaRouter);
app.use("/ativo", ativoRouter);
app.use("/subativo", subativoRouter);
app.use("/usuario", usuariosRouter);
app.use("/login", loginRouter);
app.use("/auth", authRouter);
app.use("/tarefa", tarefaRouter);
app.use("/ordemServico", ordemServicoRouter);
app.use("/insumo", IsumoRouter);

<<<<<<< Updated upstream
app.get("/", (req, res) => {
  res.send("API: Fixer");
});
=======
app.use('/planta', plantaRouter);
app.use('/area', areaRouter);
app.use('/sistema', sistemaRouter);
app.use('/ativo', ativoRouter);
app.use('/subativo', subativoRouter);
app.use('/usuario', usuariosRouter);
app.use('/login', loginRouter);
app.use('/auth', authRouter);
app.use('/dashboard', dashboardRouter);

app.use('/tarefa', tarefaRouter);
app.use('/ordemServico', ordemServicoRouter);
app.use('/insumo', IsumoRouter)

app.get('/', (req, res) => {
  res.send('API: Fixer')
})
>>>>>>> Stashed changes

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
