function main() {
    var vehiculo = declaro_padre()
    var coches = declarar_coche(vehiculo)
    var camiones = declarar_camion(vehiculo)
    var n_coches = 0
    var n_camiones = 0
    var lugares_ocupados = iniciar_array_posiciones()
    console.table(lugares_ocupados)
    var repetir = true
    var rep_introducir = false
    var rep_sacar = false
    var rep_ver = false
    do {
        var menu = prompt("PARKING\n¿Que quieres hacer?\n1.-Introducir un vehículo" +
            "\n2.-Sacar un vehiculo" +
            "\n3.-Comprobar parking\n4.-Finalizar programa")
        menu = parseInt(menu)
        switch (menu) {
            case 1:
                do {
                    lugares_ocupados = entrada(lugares_ocupados, coches, camiones, n_coches, n_camiones)
                    console.table(lugares_ocupados)
                    rep_introducir = confirmar("introducir otro vehículo")
                } while (rep_introducir);
                break;
            case 2:
                do {
                    lugares_ocupados = sacar_vehiculo(lugares_ocupados, coches, camiones)
                    console.table(lugares_ocupados)
                    rep_sacar = confirmar("sacar otro vehículo")
                } while (rep_sacar);

                break;

            case 3:
                do {
                    visualizar(lugares_ocupados)
                    rep_ver = confirmar("seguir comprobando el parking")
                } while (rep_ver)

                break;
            case 4:

                repetir = false
                break;

            default:
                alert("ERROR,\nOrden no reconocida")
                break;
        }
    } while (repetir);

}
main()