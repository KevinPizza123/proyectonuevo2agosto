import {Connection, MysqlError} from "promise-mysql";
import mysql from "mysql";
import keys from "./keys";

const pool = mysql.createPool(keys.database);

pool.getConnection((err ,connection) =>{
if(err) throw err ; connection.release();
console.log('Se ha conectado a la base de datos')
});
export default pool;

