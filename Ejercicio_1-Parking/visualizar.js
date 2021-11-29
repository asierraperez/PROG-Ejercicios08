/**
 * visualizar estado del parking
 * @param {array<object>} posiciones 
 */
function visualizar(posiciones) {
    /**
     * auxiliar para ver el estado del parking
     * @type {array<object>}
     */
    var aux_ver_posiciones = posiciones
    /**
     * para ver el parking completo
     * @type {string}
     */
    var tabla = ""
    /**
     * vehiculo individual
     * @type {number}
     */
    var aux_vehiculo
    var comprobar = false
    /**
     * seleccion de operacion
     * @type {number}
     */
    var menu_visualizar = prompt("1.-Buscar vehiculo por nombre del dueño\n" +
        "2.-Por posición en el parking\n" +
        "3.-Visualizar todo el parking")
    menu_visualizar = parseInt(menu_visualizar)

    switch (menu_visualizar) {
        case 1:
            comprobar = comprobar_parking(aux_ver_posiciones)

            if (comprobar) {
                /**
                 * nombre del dueño
                * @type {string}
                */
                var nombre = prompt("Introduce nombre del propietario")

                for (let i = 0; i < aux_ver_posiciones.length; i++) {
                    for (let j = 0; j < aux_ver_posiciones[i].length; j++) {
                        //si el nombre de alguna posicion coincide con el introducido
                        if (aux_ver_posiciones[i][j].propietario == nombre) {
                            if (aux_ver_posiciones[i][j].tipo == "coche") {
                                alert("Nombre del propetario: " + aux_ver_posiciones[i][j].propietario +
                                    "\nTipo de vehículo: " + aux_ver_posiciones[i][j].tipo +
                                    "\nPosicion: " + aux_ver_posiciones[i][j].posicion_i + "," + aux_ver_posiciones[i][j].posicion_j)
                            }
                            if (aux_ver_posiciones[i][j].tipo == "camion") {
                                alert("Nombre del propetario: " + aux_ver_posiciones[i][j].propietario +
                                    "\nTipo de vehículo: " + aux_ver_posiciones[i][j].tipo +
                                    "\nPosicion: (" + aux_ver_posiciones[i][j].posicion_i1 + " , " + aux_ver_posiciones[i][j].posicion_j1 +
                                    ").(" + aux_ver_posiciones[i][j].posicion_i2 + "," + aux_ver_posiciones[i][j].posicion_j2 + ")")
                            }
                        }
                    }
                }
            }


            break;

        case 2:
            comprobar = comprobar_parking(aux_ver_posiciones)
            if (comprobar) {
                /**
            * fila a consultar
            * @type {number}
            */
                var ver_pos_i = prompt("Introduce la posición de la fila")
                /**
                 * columna a consultar
                 * @type {number}
                 */
                var ver_pos_j = prompt("Introduce la posición de la columna")

                ver_pos_i = parseInt(ver_pos_i)
                ver_pos_j = parseInt(ver_pos_j)
                //busco en esa posición en concreto a ver que hay
                if (aux_ver_posiciones[ver_pos_i][ver_pos_j] != 0) {
                    alert("En posición: " + ver_pos_i + " , " + ver_pos_j +
                        "\nVehículo guardado: " + aux_ver_posiciones[ver_pos_i][ver_pos_j].tipo +
                        "\nPropietario: " + aux_ver_posiciones[ver_pos_i][ver_pos_j].propietario)
                } else {
                    alert("No se encontro ningun vehiculo en la posicion indicada")
                }
            }

            break;

        case 3:
            //recorro la matriz de posiciones
            for (let i = 0; i < aux_ver_posiciones.length; i++) {
                for (let j = 0; j < aux_ver_posiciones[i].length; j++) {
                    aux_vehiculo = aux_ver_posiciones[i][j]
                    //antes de cada casilla coloco un '|' para separarlas
                    tabla = tabla + "|"
                    //si en esa posicion hay un coche coloco una 'A'
                    if (aux_vehiculo.tipo == "coche") {
                        tabla = tabla + (" A ")
                        //si hay un camión una 'C'
                    } else if (aux_vehiculo.tipo == "camion") {
                        tabla = tabla + (" C ")
                    }
                    else {
                        //y si no hay nada una 'O'
                        tabla = tabla + " O "
                    }
                    // al llegar a la ultima j de la linea coloco otra '|' y salto de linea
                    if (j == (aux_ver_posiciones[i].length - 1)) {
                        tabla = tabla + "|\n"
                    }

                }

            }
            alert("A=Coche\nC=Camión\n" + tabla)
            break;
        default:
            alert("ERROR,\nOrden no reconocida")
            break;
    }



}