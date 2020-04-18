const mongoose = require('mongoose')

const uri = 'mongodb://localhost:27017/ejemplo';
const db = mongoose.connection;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}) //o 127.0.0.1 y el puerto que te de la nube : nombre
    .catch(err => console.log(err));

//Mongoose cuando tu coneccion haya sido abierta quiero ver en console
//utilizo un guión para indicar que no utilizaré este param
//Diferencia entre on vs one es que solo escuchare ese evneto una vez
db.once('open', _ => {
    console.log('La base de datos esta conectada a', uri); 
})

db.on('error', err => {
    console.log(err);
})