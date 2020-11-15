# CRM Backend

## Requerimientos 📄
- Node >= 12.8
- Mongo >= 4.2.2
- Editor de codigo


## Instalación 📦
- Clonar el repositorio
- Instalar las dependencias con `npm install`
- Crear el archivo con las variables de entorno en la raíz del proyecto y nombrarlo como "variables.env"
- Agregar una cuenta de administrador

## Ejecución 🧪
- Desarrollo: `npm run dev`
- Producción: `npm run start`

> La única diferencia es que con el primero el servidor se reinicia automáticamente al guardar cambios.

## Archivo variables.env
El archivo debe contener las siguientes variables
- PORT: Puerto en el cual levantar el servicio, si no se agrega por default corre en el puerto 7000.
- DB_URL: Ruta de de la base de datos, si la base de datos se crea en local no require contraseña
- HOST: Dirección donde se aloja la app
- FRONTEND_URL: Direccion donde se aloja el cliente de la app 

Ejemplo:

```env

  PORT=4000
  DB_URL=mongodb://localhost/crm-db
  FRONTEND_URL=http://localhost:3000
  HOST=localhost
```

Ahora que todo está listo lo que sigue es descargar y configurar el cliente de la aplicacion para ello visita el siguiente enlace: 
<a href="https://github.com/eduardo-talavera-dev/crm_frontend_react">CRM Frontend</a>
