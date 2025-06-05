//valida los campos de la base de datos

const  joi = require('joi');

const productoSchema = joi.object({
    nombre: joi.string().required(),
    dificultad: joi.string().required()
});

exports.validateProducto = (req, res, next) =>{
    const {error} = productoSchema.validate(req.body);
    if(error) {
        return res.status(400).json({message: error.details[0].message

        });
    }
    next();
}