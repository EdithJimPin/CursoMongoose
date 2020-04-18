//encontrar y luego reemplazar
require('../connection')

const User = require('../models/User')

//si quiero buscar un solo dato y alterarlo
//Primero vemos sus datos anteriores y despues se guarda
const someFunction = async () => {
    const user = await User.findOne({username: 'Dona'});
    console.log(user);
    user.password = 'minuevacontraseña';
    user.save();  
}

//otro método
const otherFunction = async () => {
    const user = await User.findOneAndUpdate({username: 'Cameron'},{
        name: 'Cameron Diaz'
    }, {new: true}) //se esta creando un campo nuevo, se añadio una propiedad mas
    console.log(user);  
}


//otro método
async function updateUsers(){
    const user = await User.update({username: 'fazt'}, {
        password: 'contraseñasegura'
    });
    console.log(user);
}


otherFunction();
