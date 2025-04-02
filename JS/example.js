/*
MENU
0. Login
1. Registro
2. Inicio
3. Mis pedidos
4. Salir
*/

var user = 6;
switch (user) {
    case 0:
        console.log("login");
        break;
    case 1:
        console.log("Registro");
        break;
    case 2:
        console.log("Bienvenido");
        break;
    case 3:
        console.log("Mis pedidos");
        break;
    case 4:
        console.log("Gracias por visitar");
        break;
    default:
        console.log("Opción no válida");
}
