# Polisoftwares Backend

## Descripción
Este proyecto es una API backend desarrollada con Node.js, Express y configurada para manejar solicitudes relacionadas con aplicaciones. Proporciona rutas para obtener una lista de aplicaciones y buscar aplicaciones por nombre.

## Requisitos
Asegúrate de tener instalados los siguientes componentes antes de comenzar:

- Node.js (v14 o superior)
- Yarn (opcional, puedes usar npm si prefieres)

## Instalación
Descomprime el archivo ZIP del proyecto y luego ejecuta los siguientes comandos para instalar las dependencias necesarias:

```bash
# Moverte al directorio del proyecto
cd polisoftwares_backend

# Instalar dependencias
yarn install
# o si prefieres npm
npm install
```

## Configuración
Crea un archivo `.env` en la raíz del proyecto para configurar las variables de entorno necesarias.

## Comandos disponibles

### Iniciar el servidor en modo desarrollo
```bash
yarn nodemon src/app.js
```
O, si prefieres npm:
```bash
npm run dev
```
El servidor se iniciará en `http://localhost:3001`

## Estructura del Proyecto
```
polisoftwares_backend/
├── app.js
├── controllers/
│   └── applicationsController.js
├── data/
│   └── applications.json
├── routes/
│   └── applications.js
├── package.json
└── README.md
```

### Descripción de Archivos
- **app.js:** Archivo principal de la aplicación que configura Express y registra las rutas.
- **controllers/applicationsController.js:** Lógica para manejar las solicitudes de las rutas relacionadas con aplicaciones.
- **routes/applications.js:** Define las rutas para obtener aplicaciones.
- **data/applications.json:** Archivo JSON que contiene datos de ejemplo de aplicaciones.

## Rutas
### Obtener todas las aplicaciones
**GET /api/v1/applications**

#### Respuesta de ejemplo:
```json
[
  {
    "id": 1,
    "name": "Application One",
    "icon": "ic_1.svg"
  },
  {
    "id": 2,
    "name": "Application Two",
    "icon": "ic_2.svg"
  }
]
```

### Buscar aplicaciones por nombre
**GET /api/v1/applications/search?name=texto**

#### Parámetros:
- **name:** Nombre o parte del nombre de la aplicación.

#### Respuesta de ejemplo:
```json
[
  {
    "id": 1,
    "name": "Example App",
    "icon": "ic_1.svg"
  }
]
```
#### Códigos de estado:
- **200:** Éxito.
- **400:** Faltan parámetros necesarios.

## Tecnologías Utilizadas
- **Node.js:** Entorno de ejecución para JavaScript.
- **Express:** Framework web para Node.js.
- **Cors:** Middleware para permitir solicitudes CORS.
- **Nodemon:** Herramienta para desarrollo que reinicia el servidor automáticamente.

## Mejoras futuras
- Validación y sanitización de entradas.
- Conexión a una base de datos.
- Manejo avanzado de errores.