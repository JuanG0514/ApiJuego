// no definido
const express = require (`express`);
// require(`express-async-errors`);
const helmet =  require (`helmet`);
const productoRoutes = require (`./routes/productoRoutes`);
const errorHandler = require (`./middleware/errorHandler`);

const app =  express();

app.use(helmet());

app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultsrc: ["'self'"],
        scriptSrc: ["self'","'unsafe-inline'"],
        styleSrc: ["'self'","'unsafe-inline'"],
        imgSrc: ["'self'","data:","https:"],
    },
}));

// Política de Referencia
app.use(helmet.referrerPolicy({ policy: 'strict-origin-when-cross-origin' }));

// Middleware para parsear JSON
app.use(express.json());

// Rutas de productos
app.use('/api/juego', productoRoutes);

// Middleware de manejo de errores
app.use(errorHandler);

module.exports = app;