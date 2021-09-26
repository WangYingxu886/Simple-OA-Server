//数据库的连接
const mongoose = require('mongoose')
const config = require('./index')
const log4 = require('../utils/log4')

mongoose.connect(config.URL, { useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connection.on('error', ()=>{
    log4.error('数据库连接失败')
})