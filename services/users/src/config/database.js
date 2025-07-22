import dotenv from "dotenv"
import { Sequelize } from "sequelize"

dotenv.config()

export default new Sequelize({
    dialect: process.env.DB_DIALECT,
    storage: process.env.DB_STORAGE,
    logging: false
})