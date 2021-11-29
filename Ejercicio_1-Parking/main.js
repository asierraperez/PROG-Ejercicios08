function main() {
    /**
     * objeto con los datos comunes de los vehiculos
     * @type {object}
     */
    var vehiculo = declaro_padre()
    /**
     * objeto con los datos de los coches 
     * @type {object}
     */
    var coches = declarar_coche(vehiculo)
    /**
     * objeto con los datos de los camiones 
     * @type {object}
     */
    var camiones = declarar_camion(vehiculo)
    /**
     * array de posiciones del parking
     * @type {array<number>}
     */
    var lugares_ocupados = iniciar_array_posiciones()
    console.table(lugares_ocupados)
    /**
     * true=>repetir programa ;; false=> terminar
     * @type {boolean}
     */
    var repetir = true
    /**
     * true=> introducir otro vehiculo ;; false=> dejar de introducirlos
     * @type {boolean}
     */
    var rep_introducir = false
    /**
     * true=> sacar otro vehiculo ;; false=> dejar de sacarlos
     * @type {boolean}
     */
    var rep_sacar = false
    /**
     * true=> ver otro vehiculo ;; false=> dejar de verlos
     * @type {boolean}
     */
    var rep_ver = false
    var comprobar_sacar = false
    do {
        /**
         * seleccion de operacion
         * @type {number}
         */
        var menu = prompt("PARKING\n¿Que quieres hacer?\n1.-Introducir un vehículo" +
            "\n2.-Sacar un vehiculo" +
            "\n3.-Comprobar parking\n4.-Finalizar programa")
        menu = parseInt(menu)
        switch (menu) {
            case 1:
                do {
                    lugares_ocupados = entrada(lugares_ocupados, coches, camiones)
                    console.table(lugares_ocupados)
                    rep_introducir = confirmar("introducir otro vehículo")
                } while (rep_introducir);
                break;
            case 2:
                do {
                    comprobar_sacar = comprobar_parking(lugares_ocupados)
                    if (comprobar_sacar) {
                        lugares_ocupados = sacar_vehiculo(lugares_ocupados)
                        console.table(lugares_ocupados)
                        rep_sacar = confirmar("sacar otro vehículo")


                    } else {
                        rep_sacar = false
                    }
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