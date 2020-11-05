# CRM Backend

## Requerimientos 
- Node >= 12.8
- Mongo >= 4.2.2
- Editor de codigo


## Instalación
- Clonar el repositorio
- Instalar las dependencias con `npm install`
- Crear el archivo con las variables de entorno en la raíz del proyecto y nombrarlo como "variables.env"
- Agregar una cuenta de administrador

## Ejecución
- Desarrollo: `npm run dev`
- Producción: `npm run start`

> La única diferencia es que con el primero el servidor se reinicia automáticamente al guardar cambios.

## Archivo variables.env
El archivo debe contener las siguientes variables
- PORT: Puerto en el cual levantar el servicio.
- DB_URL: Ruta de de la base de datos, si la base de datos se crea en local no require contraseña
- HOST: Dirección donde se aloja la app

Ejemplo:

```env

  PORT=4000
  DB_URL=mongodb://localhost/crm-db
  HOST=localhost
```

## Agregar cuentas de administrador
Esto se debe hacer desde la terminal insertando un objeto a la colección `usuarios` con las propiedades email, nombre y password 
Ejemplo:

```bash
mongo
use crm-db
db.usuarios.insert({
  email: 'admin@mail.com',
  nombre: 'Administrador',
  password: '123123',
})
```