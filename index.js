//ייבוא ואתחול
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 5500;

//יצירת השרת
let server = express();
server.use(express.json());
server.use(cors());

//ניתוב
server.use('/api/user', require('./routes/users.route'));
server.use('/api/menu', require('./routes/menu.route'));


//הפעלת השרת
server.listen(PORT, () => console.log(`http://localhost:${PORT}`));
