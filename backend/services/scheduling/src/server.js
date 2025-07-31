import app from "./app.js"
import dotenv from "dotenv"
import sequelize from "./config/database.js"
import fillDB from "./database/seed.js"

dotenv.config()

// Inicia o banco de dados
sequelize.sync()
    .then(() => { fillDB() })
    .catch(error => console.error('❌  Erro ao se conectar com o banco de dados: ', error))

// Inicia o servidor
app.listen(process.env.PORT, () => {
    console.log(`Scheduling Service rodando na porta ${process.env.PORT}`);
});
