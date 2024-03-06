"use strict";

const { Sequelize, DataTypes } = require('sequelize')
// sequelize instance oluştur:
// const sequelize = new Sequelize('sqlite:./db.sqlite3')

const sequelize = new Sequelize('postgres://user:hulya@localhost:123/kaplan')



const Todo = sequelize.define('todos', {

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: DataTypes.TEXT, // ShortHand Using.

    priority: { // -1: Low, 0: Norm, 1: High
        type: DataTypes.TINYINT,
        allowNull: false,
        default: 0
    },

    isDone: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false
    }

    //? Not need define createdAt & updatedAt fields.
    //? createdAt ve updatedAt tanımlamaya gerek yoktur. Sequelize otomatik oluşturur/yönetir.
})

sequelize.authenticate()
    .then(() => console.log('* DB Connected *'))
    .catch(() => console.log('* DB Not Connected *'))

module.exports = Todo