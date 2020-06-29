const db = require('./dbConfig');
const Sequelize = require('sequelize');
const {STRING, ENUM, BOOLEAN} = require('sequelize')


//YOUR CODE GOES HERE
const Pumpkin = db.define('pumpkin', {
    name:{
        type:STRING,
        allowNUll:false
    },
    size:{
        type:ENUM(['small', 'medium', 'large']),
        allowNUll:false
    },
    evil:{
        type:BOOLEAN,
        defaultValue:false,
    },
    carved:{
        type:BOOLEAN,
        defaultValue:false
    },
    candle:{
        type:BOOLEAN,
        defaultValue:false
    },
})

Pumpkin.beforeCreate((pumpkin) => {
    let value = Math.round(Math.random)
    if (value === 1) {
        pumkin.evil = true;
        pumpkin.name += 'EVIL'
    }
    else{
        pumpkin.name += 'GOOD'
    }
})
Pumpkin.prototype.lightcandle = () => {
    return new Promise((res) => {
        if (this.candle === false) this.candle = true
        res(true)
    })
}
//--------------------
module.exports = Pumpkin;
