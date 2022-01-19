const mongoose = require('mongoose');

/**
 * mongoose连接数据库 0.0.0.0 120.78.162.6
 * @type {[type]}
 */
mongoose.Promise = Promise;
const url = 'mongodb://0.0.0.0:27017/test';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => {
  console.log(`数据库连接失败：${error}`);
});

db.on('open', () => {
  console.log('数据库连接成功');
});
