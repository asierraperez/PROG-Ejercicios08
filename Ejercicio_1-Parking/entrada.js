function entrada(Posiciones, coche, camion, n_coche, n_camiones) {
    var aux_posiciones = Posiciones
    var aux_coche = new coche()
    var aux_camion = new camion()
    var encontro_posicion = false
    var aux_n_coche = n_coche
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
                coche.prototype.sumar()
                //aux_coche.sumar()
                alert(aux_coche.tipo + " guardado en posición: " + aux_coche.posicion_i + "," + aux_coche.posicion_j)

                //aux_posiciones = control_coches(aux_posiciones, aux_coche, aux_n_coche)
                console.table(aux_posiciones)
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
                camion.prototype.sumar()

                alert(aux_camion.tipo + " guardado en posiciones: (" + aux_camion.posicion_i1 + "," + aux_camion.posicion_j1 + "),(" + aux_camion.posicion_i2 + "," + aux_camion.posicion_j2 + ")")

            }



            break;

        default:

            break;
    }
    return aux_posiciones


}