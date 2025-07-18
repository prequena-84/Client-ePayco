# Client ePayco
## EndPoint de las Rutas del servicio de back-end que brinda el acceso a de los datos al cliente

## Opción 1: Se debe crear un archivo .env en la ruta de la raiz del proyecto y copiar las rutas de los siquientes Endpoints de API.
## Endpoint API
VITE_API_ADD_USERS=http://localhost:8080/UserManagementAPI/V1/user/add
VITE_API_GET_USERS=http://localhost:8080/UserManagementAPI/V1/user/get
VITE_API_ADD_TRANSACTION=http://localhost:8080/UserManagementAPI/V1/transactions/add
VITE_API_GET_TRANSACTION=http://localhost:8080/UserManagementAPI/V1/transactions/report
VITE_API_CONFIRMATION_TRANSACTION=http://localhost:8080/UserManagementAPI/V1/transactions/confirmation
VITE_API_GET_TOKEN=http://localhost:8080/UserManagementAPI/V1/Auth/send-OTP

## Opción 2: Puede renombrar el archivo .env.example por .env y con esto entra en utilización este archivo para la creacion de las variables de Entorno de React.js

## Instalación de Librerias Necesarias:
Para Instalar las librerias necesarias se realiza desde la consola utilizando npm install en la raiz del proyexto.

## Proyectos de Back-End
Se necesita correr el servidor "UserManagementAPI-ePayco" https://github.com/prequena-84/UserManagementAPI-ePayco.git y seguir las intrucciones del microservicio para activar el servidor que interactua entre el cliente y el microservicio de la base de datos de las transacciones.

Se necesita correr el servidor "DatabaseServicesAPI-ePayco" https://github.com/prequena-84/DatabaseServicesAPI-ePayco.git y seguir las intrucciones del microservicio para activar el servidor que interactua con la base de datos de las transacciones. 

## Ejecución del proyecto
Se con el siguiente comando en la consola en la Raiz del Proyecto:

Developer: npm run dev
Build: npm run build
Production: npm run server

## Compilación
Para compilar el proyecto se necesita crear una carpeta llamada "build" en el mismo nivel que la carpeta "src", luego se ejecuta el comando npm run build y se creara la carpeta build con los archivos compilados.

Luego podras ejecutar el código de producción con el comando npm run server.

## Personalización de titulos navbar
Para modificar el enunciados del menu y sub menos de la barrar de navegación se necesitara realizar los cambios en el archivo "config-nav-bar.json" ubicado en la ruta src/config/config-nav-bar.json.

## Inicio de la App
Cuando ejecutes el inicio de la App veras la primera pantalla con las transacciones realizadas si las hay y los menus de navegacion consta de 4 opciones: Inicio, Registro de Usuarios, Registro de Transacciones y confirmación de trasacciones / token.

En el Menu del Inicio se visualizaran todas las transacciones realizadas hasta el presente, en el menu de Registro de Usuarios se podra registrar un nuevo usuario, en el menu de Registro de Transacciones se podra registrar una nueva transaccion y en el menu de confirmación de trasacciones / token se podra confirmar una transaccion y generar la solitud de token que se enviara al mail del cliente y luego con ese token podra validar la transacción.