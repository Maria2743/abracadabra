## DESAFIO ABRACADABRA 

A continuación explicaré un poco el desafío planteado.

# RESUMEN

El instituto recreativo, para aumentar la interacción con los usuarios que visitan su página web, contrató un servicio, cuya finalidad es realizar un juego de azar.

Por ende en este desafio se debe desarrollar un servidor con Express que sirva un sitio web estático con la temática de magia, donde se presenten 4 sombreos y al hacer click en uno de estos encontrar el conejo oculto.  

# REQUERIMIENTOS 

A continuación detallaré los requirimientos e indicaré el archivo.

1. Crear un servidor con Express en el puerto 3000

```sh
Archivo -> index.js
```

2. Definir la carpeta "public" como carpeta pública del servidor

```sh 
Archivo -> index.js
```

3. Crear en el servidor un arreglo de nombres y devolverlo en formato JSON a través de la ruta /abracadabra/usuarios

```sh
Archivo -> ./DATABASE/usuarios.database.js  (Arreglo JSON)
Ruta -> index.js (Devuelve Json)
```

4. Crear un middleware con la ruta /abracadabra/juego/:usuario para validar que el usuario recibido como párametro "usuario" existe en el arreglo de nombres creador en el servidor. 
En caso de ser exitoso, permitir el paso a la ruta GET correspondiente, de lo contrario devolver la imagen "who.jpeg".

```sh
Archivo -> index.js
```

5. Crear una ruta /abracadabra/conejo/:n que valide si el parámetro "n" coincide con el número generado de forma aleatoria.
En caso de ser existoso, devolver la imagen del conejo, de lo contrario devolver la imagen de Voldemort.

```sh
Archivo -> index.js
```

6. Crear una ruta genérica que devuelva un mensaje diciendo "Está página no existe..." al consultar una ruta que no esté definida en el servidor.

```sh
Archivo -> index.js
```