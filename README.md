# Client ePayco

## EndPoint de las Rutas del servicio de back-end que brinda el acceso a de los datos al cliente


## Opción 1: Se debe crear un archivo .env en la ruta de la raiz del proyecto y copiar las rutas de los siquientes Endpoints de API.

## Endpoint API
VITE_API_ADD_USERS=http://localhost:8080/UserManagementAPI/V1/user/add               ## OK
VITE_API_GET_USERS=http://localhost:8080/UserManagementAPI/V1/transactions/add       ## OK
VITE_API_ADD_TRANSACTION=http://localhost:8080/UserManagementAPI/V1/transactions/add ## ok
VITE_API_GET_TRANSACTION=http://localhost:8080/UserManagementAPI/V1/transactions/get ## ok
VITE_API_CONFIRMATION_TRANSACTION=http://localhost:8080/UserManagementAPI/V1/transactions/confirmation ## ok
VITE_API_GET_TOKEN=http://localhost:8080/UserManagementAPI/V1/Auth/send-OTP/ ## ok


## Opción 2: Puede renombrar el archivo .env.example por .env y con esto entra en utilización este archivo para la creacion de las variables de Entorno de React.js