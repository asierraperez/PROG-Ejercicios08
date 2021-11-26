/**
 * Entrada de datos por el usuario
 * @param {Array<object>} Posiciones - Posiciones libres y ocupadas en el parking
 * @param {object} coche - objeto con los datos de los coches guardados
 * @param {object} camion - objeto con los datos de los camiones guardados 
 * @returns {Array<object>} - Resultado de introducir un vehiculo nuevo
 */
function entrada(Posiciones, coche, camion,) {
    /**
     * auxiliar par aintroducir un vehiculo en el parking
     * @type {Array<object>}
     */
    var aux_posiciones = Posiciones
    /**
     * auxiliar, introducir un coche
     * @type {object}
     */
    var aux_coche = new coche()
    /**
     * auxiliar, introducir un camion
     * @type {object}
     */
    var aux_camion = new camion()
    /**
     * true=>encontro una posición disponible ; false=> no encontró posición
     * @type {boolean}
     */
    var encontro_posicion = false
    /**
     * Seleccion de operación
     * @type {number}
     */
    var menu_entrada = prompt("PARKING\nVehiculo a intoducir" +
        "\n1.-Coche\n2.-Camión")
    menu_entrada = parseInt(menu_entrada)

    switch (menu_entrada) {
        case 1:
            //primero recorro la matriz de posiciones
            for (let i = 0; i < aux_posiciones.length; i++) {
                for (let j = 0; j < aux_posiciones[i].length; j++) {
                    //si la posicion ==0 quiere decir que el hueco está libre
                    if (aux_posiciones[i][j] == 0) {
                        //guardo nombre y posiciones
                        aux_coche.posicion_i = i
                        aux_coche.posicion_j = j
                        aux_coche.propietario = prompt("Nombre del dueño")
                        aux_posiciones[i][j] = aux_coche
                        encontro_posicion = true
                        //en cuanto encuentre la primera posición disponible salgo el bucle
                        if (encontro_posicion) {
                            break
                        }
                    }
                }
                if (encontro_posicion) {
                    break
                }
            }
            if (encontro_posicion) {
                alert(aux_coche.tipo + " guardado en posición: " + aux_coche.posicion_i + "," + aux_coche.posicion_j)
                console.table(aux_posiciones)
            } else {
                alert("No fue posible guardar " + aux_coche.tipo + ",\nParking completo")
            }
            break;

        case 2:
            //primero recorro la matriz de posiciones
            for (let i = 0; i < aux_posiciones.length; i++) {
                for (let j = 0; j < aux_posiciones[i].length; j++) {
                    //si la posicion ==0 quiere decir que el hueco está libre
                    if (aux_posiciones[i][j] == 0) {

                        if (aux_posiciones[i][j] == 0) {

                            //como los camiones ocupan 2 posiciones,busco en la siguiente j
                            //si es ==0 es que esa posición tambien esta libre, por lo que cabe el camion
                            if ((j + 1) < aux_posiciones.length) {
                                if (aux_posiciones[i][j + 1] == 0) {
                                    aux_camion.posicion_i1 = i
                                    aux_camion.posicion_j1 = j
                                    aux_camion.posicion_i2 = i
                                    aux_camion.posicion_j2 = j + 1
                                    aux_camion.propietario = prompt("Nombre del dueño")
                                    aux_posiciones[i][j] = aux_camion
                                    aux_posiciones[i][j + 1] = aux_camion
                                    encontro_posicion = true
                                }
                                //en caso de que la j estea ocupada, busco en la siguiente i
                            } else if ((i + 1) < aux_posiciones[i].length) {
                                if (aux_posiciones[i + 1][j] == 0) {
                                    camion.prototype.sumar()
                                    aux_camion.posicion_i1 = i
                                    aux_camion.posicion_j1 = j
                                    aux_camion.posicion_i2 = i + 1
                                    aux_camion.posicion_j2 = j
                                    aux_camion.propietario = prompt("Nombre del dueño")
                                    aux_posiciones[i][j] = aux_camion
                                    aux_posiciones[i + 1][j] = aux_camion
                                    encontro_posicion = true
                                }

                            }


                        }
                        if (encontro_posicion) {
                            break
                        }
                    }

                }
                if (encontro_posicion) {
                    break
                }
            }
            if (encontro_posicion) {

                alert(aux_camion.tipo + " guardado en posiciones: (" + aux_camion.posicion_i1 + "," + aux_camion.posicion_j1 + "),(" + aux_camion.posicion_i2 + "," + aux_camion.posicion_j2 + ")")

            } else {
                alert("No fue posible guardar " + aux_camion.tipo + ",\nParking completo")
            }
            break;

        default:
            alert("ERROR,\nOrden no reconocida")

            break;
    }
    return aux_posiciones


}