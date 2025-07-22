import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.js';

const Scheduling = sequelize.define('Scheduling', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    professionalCpf: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userCpf: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ubsCnpj: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            isDate: true
        }
    },
    status: {
        type: DataTypes.ENUM('Pendente', 'Confirmado', 'Cancelado'),
        allowNull: false,
        defaultValue: 'Pendente'
    }
}, {
    timestamps: false,
});

export default Scheduling;