require('dotenv').config();
const mongoose = require('mongoose');

const url = process.env.MONGO_URI;

mongoose.connect(url)
  .then(() => console.log('Kết nối thành công'))
  .catch(err => console.error('Lỗi kết nối:', err));