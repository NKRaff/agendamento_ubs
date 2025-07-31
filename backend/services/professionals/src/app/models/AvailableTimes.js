import { DataTypes } from 'sequelize';
import sequelize from "../../config/database.js"

const AvailableTimes = sequelize.define('AvailableTimes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    professionalCpf: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'Professionals',
            key: 'cpf'
        }
    },
    date: {
        type: DataTypes.JSON,
        allowNull: false
    },
    startTime: {
        type: DataTypes.TIME,
        allowNull: false
    },
    endTime: {
        type: DataTypes.TIME,
        allowNull: false
    },
}, {
    timestamps: false,
    tableName: 'available_times'
});

AvailableTimes.associate = (models) => {
    AvailableTimes.belongsTo(models.Professionals, {
        foreignKey: 'professionalCpf',
        targetKey: 'cpf',
        as: 'professional'
    });
}

export default AvailableTimes;