# The Coral Hotel

Proyecto desarrollado como actividad final del bootcamp _Hack a Bos_.  
Plataforma enfocada al turismo especializado, tales como hoteles o alojamientos con encanto, etc.  
Los usuarios podrán acceder a la aplicación desde un dispositivo (tableta o PC) que el hotel pondrá a su disposición en cada habitación.  
El cliente puede encontrar cierta información de interés que hotel considere oportuna, podrá reservar experiencias de una manera personalizada y rápida, acceder a sus reservas y llevar un control de los gastos o incluso, llamar a recepción sin teléfono propio.

![The Coral Hotel](https://res.cloudinary.com/cloudmaria/image/upload/v1560808523/image1_snvvn0.png)

## Características 📝

- Reserva de las experiencias que ofrece el hotel, agregando al carrito.
- Posibilidad de modificar o eliminar las pre-reservas que se están en el carrito.
- Ver detalles de las reservas confirmadas, sirviendo como control de gastos al usuario.
- Puede acceder a sus propios datos, modificándolos o incluso borrando el perfil.
- Búsqueda instantánea por nombre de la experiencia (Full Text Search).
- Llamadas directas al departamento de recepción (sin usar teléfono propio).

## Comenzando 🚀

_Estas instrucciones permitirán obtener una copia del proyecto en funcionamiento en su máquina local para propósitos de desarrollo y pruebas._

Mire **Deployment** para conocer como desplegar el proyecto.

### Pre-requisitos 📋

- _Tener una cuenta en `Sendgrid`_ [Sendgrid](https://sendgrid.com)

- _Tener una cuenta en `Cloudinary`_ [Cloudinary](https://cloudinary.com)

### Instalación 🔧

_Pasos a ejecutar para tener un entorno de desarrollo:_

_1.- Clona el proyecto_

```bash
git clone https://github.com/mariarte/HAB--Coral-Hotel-Backend
```

_2.- Instalar dependencias npm dentro de la carpeta del proyecto_

```bash
cd coralhotel
npm install
```

_3.- Cambia el nombre del archivo_ **to-modify.env** _a_ **.env** _y rellena los datos necesarios de las variables de entorno que se usan aquí_

### Development server 🧩

_Comience la aplicación para un servidor de desarrollo_

```bash
nodemon index.js
```

_Ahora vaya a la carpeta de frontend para seguir con el proceso completo:_ [Frontend APP](https://github.com/mariarte/HAB--Coral-Hotel-Frontend-)

## Construir 🏗

Ejecute `ng build` para construir el proyecto. Los artefactos de construcción se almacenarán en el directorio `dist/`. Use el indicador `--prod` para una compilación de producción.

## Deployment 📦

_Puede usar la versión desplegada de la app con todas sus funcionalidades en:_
[The Coral Hotel](https://coral-hotel.firebaseapp.com/)

## Construido con 🛠️

Este proyecto ha sido creado con:

- [Node js](https://nodejs.org/es/) version 10.14.1

## Ayuda adicional 🙏🏻

Para obtener más ayuda sobre Angular CLI usa `node help` o consulte [Node js](https://nodejs.org/es/docs/).

## Autores ✒️

- **María Arteaga** - _Trabajo Inicial_ - [mariarte](https://github.com/mariarte)

## Expresiones de Gratitud 🎁

- Comente y enseñe a otras personas este proyecto 📢
- Muchas gracias a todo el equipo y compañeros por el apoyo mostrado en todo momento 🤓.
