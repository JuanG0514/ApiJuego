//crud 
const pool = require(`../config/database`);

class Juego {
    static async getAll(){
        const[rows] = await pool.query(`SELECT * FROM juego`);
        return rows;
    }

    static async getById(id){
        const [rows]= await pool.query(`SELECT * FROM juego WHERE id_juego
            = ?`, [id]);
          return rows [0];
    }

    static async create(juego) {
    const { nombre, dificultad } = juego;
    const [result] = await pool.query(
    `INSERT INTO juego (juego, dificultad) VALUES (?,
    ?)`,
    [nombre, dificultad]
    );
    return result.insertId;
    }

    static async update (id, juego){
        const {nombre,dificultad} = juego;
        const [result]=await pool.query(
            `UPDATE juego SET juego = ?, dificultad = ?
            WHERE id_juego = ?`,
            [nombre,dificultad,id]
        );
        return result.affectedRows;
    }

    static async delete(id){
        const [result] = await pool.query(`DELETE FROM juego 
            WHERE id_juego= ?`,[id]);
            return result.affectedRows;
    }
}

module.exports = Juego;



