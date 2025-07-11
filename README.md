# Client ePayco

## EndPoint de las Rutas del servicio de back-end que brinda el acceso a de los datos al cliente


## Opción 1: Se debe crear un archivo .env en la ruta de la raiz del proyecto y copiar las rutas de los siquientes Endpoints de API.

## Endpoint API
##OK
VITE_API_ADD_USERS=http://localhost:8080/UserManagementAPI/V1/user/add

VITE_API_CONSULTA_USUARIO=http://localhost:8040/API/V2/usuario/consulta/
VITE_API_REGISTRO_TRANSACCIONES=http://localhost:8040/API/V2/transaccion/agregar/

## ok
VITE_API_GET_TRANSACTION=http://localhost:8080/UserManagementAPI/V1/transactions/get

VITE_API_CONFIRMAR_TRANSACCION=http://localhost:8040/API/V2/transaccion/confirmar-transaccion/

VITE_API_SOLICITAR_TOKEN=http://localhost:8040/API/V2/solicitar-token/

## Opción 2: Puede renombrar el archivo .env.example por .env y con esto entra en utilización este archivo para la creacion de las variables de Entorno de React.js