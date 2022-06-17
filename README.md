# acronex-frontend

Aplicación frontend con javascript ES6, Vue.js y Nuxt.js
Para mas informacion del stack tecnologico visitar -> [documentation](https://nuxtjs.org).

## Requerimientos para su uso

*  docker
*  docker-compose

## Para uso local del proyecto

Por consola, ejecutar los siguientes comandos: 
```bash
# build de proyecto
$ docker-compose build

# levantar proyecto
$ docker-compose up #Si desea ejecutarlo en modo detach agregar la bandera "-d" al final del comando
```

## Observaciones

*  Los estilos no quedaron como en las consigas
*  Se agrego una consulta especial con paginado para la pantalla principal
*  Por falta de tiempo faltaron las siguientes mejoras:
- Los estilos no quedaron como en las consigas
- Carga masiva de datos para pruebas
- Documentación de código
- Tratamiento de errores
- No se desplego la aplicacion en un host
- No se cambio las URLs, se utlizan con http://localhost:PUERTO/
