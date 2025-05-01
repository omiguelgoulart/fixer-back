## 🌿 Fluxo de Branches e Padrão de Commits com Gitmoji

### 📌 Branch principal: `main`
- Contém o código estável, pronto para produção.
- Nenhum desenvolvimento direto é feito aqui.

### 🚧 Branch de desenvolvimento: `dev`
- Todas as novas funcionalidades e correções partem da `dev`.
- Merge para `main` só acontece após testes e validações.

---

### 🔀 Criando uma nova funcionalidade (feature)

Sempre crie uma nova branch **a partir da `dev`**, com o seguinte padrão:

```bash
git checkout dev
git pull origin dev
git checkout -b feat/nome-da-funcionalidade
```

Exemplo:
```bash
git checkout -b feat/cadastro-de-ativos
```

### 🧹 Criando uma branch para correção de bug
```bash
git checkout dev
git pull origin dev
git checkout -b fix/corrige-erro-apontamento
```

### ✅ Finalizou a tarefa?
1. Faça o commit com Gitmoji (veja a tabela abaixo).
2. Suba sua branch:
    ```bash
    git push origin feat/nome-da-funcionalidade
    ```
3. Crie um Pull Request (PR) da sua branch para `dev`.

---

## 💬 Padrão de Commits com Gitmoji

Utilizamos o padrão [Gitmoji](https://gitmoji.dev/) para manter um histórico de commits claro e padronizado.

### 📌 Exemplo de commit:
```bash
git commit -m ":sparkles: Adiciona tela de cadastro de ativos"
```

### 📘 Tabela de Emojis mais usados

| Emoji | Código            | Tipo                  | Quando usar?                                      |
|-------|-------------------|-----------------------|--------------------------------------------------|
| ✨    | `:sparkles:`      | Nova funcionalidade   | Adição de algo novo                              |
| 🐛    | `:bug:`           | Correção de bug       | Corrige algo quebrado                            |
| ♻️    | `:recycle:`       | Refatoração           | Melhora o código sem alterar funcionalidade      |
| 📝    | `:memo:`          | Documentação          | Atualiza README ou comentários                   |
| 🎨    | `:art:`           | Estilo                | Ajuste visual ou formatação                      |
| 🔥    | `:fire:`          | Remoção               | Remove código ou arquivos                        |
| 🚧    | `:construction:`  | Em progresso          | Funcionalidade ainda em construção               |
| ✅    | `:white_check_mark:` | Testes             | Adiciona ou ajusta testes                        |
| 📦    | `:package:`       | Dependências          | Instala ou remove pacotes                        |
| 🔧    | `:wrench:`        | Configurações         | Altera arquivos de configuração                  |

---

### ✔️ Boas práticas
- Sempre crie branches novas a partir da `dev`.
- Faça commits pequenos e objetivos, com o emoji correspondente.
- Não faça merge direto na `main` – use Pull Requests com revisão.
