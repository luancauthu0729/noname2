const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '127.0.0.1',
    user: 'xs2',
    password: 'RTPdZs5izsAnKbGa',
    database: 'xs2',
});

export default connection;


//优 选 源 码 库  w w w. y x y m k .n e t