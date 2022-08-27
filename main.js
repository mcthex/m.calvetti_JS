let entrada = prompt("Seleccionar aderezo de 1 a 5 o ESC para salir");

while (entrada != "ESC" && entrada != "esc") {
    switch (entrada) {
        case "1":
            alert ("Mayonesa");
            break;
        case "2":
            alert ("Mostaza");
            break;
        case "3":
            alert ("Ketchup");
            break;
        case "4":
            alert ("Salsa Golf");
            break;
        case "5":
            alert ("Salsa Verde")
            break;
        default:
            alert ("Error, debe seleccionar de 1 a 5 o ESC para salir");
            break;
    }
    entrada = prompt ("Seleccionar aderezo de 1 a 5 o ESC para salir");
}
