# CursoMongoose
Mongoose es un ORM (Orden relation at mapping) dedicado node y al mismo tiempo una biblioteca de npm y Nodejs, que permite interactuar con Mongodb a traves de orientación a objetos y funciones que permiten interactuar con la base de datos.

Se debe cumplir una estructura.

## Requisitos

 - [ ] Mongodb instalado 
 - [ ] Conocer lo básico de Mongodb

Para saber si esta instalado ejecutamos en consola lo siguiente:

````
mongod --version
````
## Ejecutar mongodb

````
mongod
````

Mostrará un mensaje que dice: 
````
Waiting for connection on port 27017
````
Se tiene que ejecutar para poder conectarnos a mongo.

Una vez ejecutado mongo, ya podemos conectarnos a traves de Moongose.

**Documentación de mongoose**
https://mongoosejs.com/

##Instalar mongoosse

Se instala a travez de la terminal con el siguiente código

`````
npm install mongoose
`````

## Requerir mongoose en el archivo principal.js  (para el ejemplo index.js)

Con el siguientes código

`````
const mongoose = require('mongoose')
//Para conectarme a la base de datos local para el ejemplo
mongose.connect('mongodb://direccionIP:puertoAlqueseConectará/paginaweb') //o una dirección ip a la que se vaya a conectar
`````
Mongoose nos ayuda a crear la base de datos aunque no exista

Despues de armar la ruta del servidor se ejecuta el siguiente código para ejecutar el archivo principal:
``````
node index.js
``````
Al mandarnos error agregamos las opciones que nos da
``````
useUnifiedTopology: true
useUnifiedTopology: true
``````

Si queremos que nos mande un mensaje al momento de que se conecta con la base de datos, agregamos eventos, los cuales encontramos en la pagina de mongoose https://mongoosejs.com/docs/connections.html#connection-events

Para agregar un evento se utiliza el siguiente código:
``````
db.once('open', _ => {
    console.log('La base de datos esta conectada a', uri); 
})
``````
### Definir modelos

Creamos un archivo que inicie con mayúscula como si fuera una clase y en este vamos a definir esquemas.

En la documentación de Mongoose también tienen los tipos de esquemas.

**Veasé ejemplos de esquemas en el archivo Products**

Mongoose tambien ofrece la funcion **model**

Que nos sirve para guardar datos eliminar y editarlos.

Al agregar un producto mongoose se encarga de asignarle un id.

**comandos para mongodb:**
> db.users.find().pretty()
> db.products.find().pretty()
> node crud/create.js

**Cuando ha sido modificado en la base de datos**
{ n: 1, nModified: 1, ok: 1 }

En node se ejecutan los comandos y en mongo se consultan.






