import express from "express";
import cors from "cors";

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
import dashboardRouter from "./routes/dashboard";

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

// Rotas principais
app.use("/planta", plantaRouter);
app.use("/area", areaRouter);
app.use("/sistema", sistemaRouter);
app.use("/ativo", ativoRouter);
app.use("/subativo", subativoRouter);
app.use("/usuario", usuariosRouter);
app.use("/login", loginRouter);
app.use("/auth", authRouter);
app.use("/dashboard", dashboardRouter);
app.use("/tarefa", tarefaRouter);
app.use("/ordemServico", ordemServicoRouter);
app.use("/insumo", IsumoRouter);

// Rota raiz
app.get("/", (req, res) => {
  res.send("API: Fixer");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
