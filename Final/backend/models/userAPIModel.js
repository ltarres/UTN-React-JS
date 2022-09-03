var pool = require('./bd');//llamando datos BD
var md5 = require('md5');

async function getUserByUserAPInameAndPassword(user, password) {
    try {
        var query = 'select * from user where usuario =? and password =? limit 1';
        var rows = await pool.query(query, [user, md5(password)]);
        return rows[0];
    } catch (error) {
        console.log(error);

    }

}

async function getUserAPIByEmail(email) {
    var query = 'select * from user  where email=?';
    var rows = await pool.query(query, [email]);
    return rows[0];
}


async function insertUserAPI(obj) {
    try {
            var query = 'insert into user  set ?';
            var rows = await pool.query(query, [obj])
            return rows;
    } catch (error) {
            console.log(error);
            throw error;
    }

}


module.exports = {getUserByUserAPInameAndPassword}