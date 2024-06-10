import express from 'express';
import { usuarios } from './DATABASE/usuarios.database.js';
const app = express()


app.use(express.urlencoded({ extended: true }))

const __dirname = import.meta.dirname;

//2. Definir la carpeta "public" como carpeta pública del servidor
app.use(express.static(__dirname + '/public'));


app.get('/abracadabra/usuarios', (req, res) => {
    res.json({
        usuarios
    })
})

//4.2 Función para que en caso de ser exitoso, permitir el paso a la ruta GET correspondiente, de lo contrario devolver la imagen "who.jpeg".

const usuarioMiddleware = (req, res, next) => {
    const nombreUsuario = req.params.usuario;
    const usuarioExiste = usuarios.find(u => u.toLowerCase() === nombreUsuario.toLowerCase());

    if (usuarioExiste) {
        next();
    } else {
        res.sendFile(__dirname + "/public/assets/img/who.jpeg");
    }
};


//4.1 Crear un middleware con la ruta /abracadabra/juego/:usuario para validar que el usuario recibido como párametro "usuario" existe en el arreglo de nombres creador en el servidor.

app.get('/abracadabra/juego/:usuario', usuarioMiddleware, (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})


//5. , de lo contrario devolver la imagen de Voldemort.

const randomMiddleware = (req, res, next) => {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    if (parseInt(req.params.n) === randomNumber) {
        next();
    } else {
        res.sendFile(__dirname + "/public/assets/img/voldemort.jpg");
    }
};


//5.1 Crear una ruta /abracadabra/conejo/:n que valide si el parámetro "n" coincide con el número generado de forma aleatoria. En caso de ser existoso, devolver la imagen del conejo
app.get('/abracadabra/conejo/:n', randomMiddleware, (req, res) => {
    res.sendFile(__dirname + "/public/assets/img/conejito.jpg");
})



//6. Crear una ruta genérica que devuelva un mensaje diciendo "Está página no existe..." al consultar una ruta que no esté definida en el servidor.
app.use('*', (req, res) => {
    res.status(404).json({ ok: false, msg: 'Esta página no existe...' })
})


//1. Crear un servidor con Express en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`El servidor esta andando en http://localhost:${PORT}`)
})
