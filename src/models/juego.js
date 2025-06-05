//crud 
const pool = require(`../config/database`);

class Producto {
    static async getAll(){
        const[rows] = await pool.query(`SELECT * FROM juego`);
        return rows;
    }

    static async getById(id){
        const [rows]= await pool.query(`SELECT * FROM juego WHERE id_juego
            = ?`, [id]);
          return rows [0];
    }

    static async create(producto) {
    const { nombre, dificultad } = producto;
    const [result] = await pool.query(
    `INSERT INTO productos (juego, dificultad) VALUES (?,
    ?, ?)`,
    [nombre, dificultad]
    );
    return result.insertId;
    }

    static async update (id, producto){
        const {juego,dificultad} = producto;
        const [result]=await pool.query(
            `UPDATE productos SET juego = ?, dificultad = ?
            WHERE ID = ?`,
            [juego,dificultad,id]
        );
        return result.affectedRows;
    }

    static async delete(id){
        const [result] = await pool.query(`DELETE FROM juego 
            WHERE id= ?`,[id]);
            return result.affectedRows;
    }
}

module.exports = Producto;



