import { DataTypes } from "sequelize"
import sequelize from "../../config/database.js"

const Professional = sequelize.define("Professional", {
    cpf: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    specialty: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ubs: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rule: {
        type: DataTypes.ENUM('Admin', 'Paciente', 'Profissional'),
        allowNull: false,
        defaultValue: false
    },
    
}, { timestamps: false })

export default Professional