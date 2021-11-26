function visualizar(posiciones) {

    var aux_ver_posiciones = posiciones
    var tabla = ""
    var aux_vehiculo
    var menu_visualizar = prompt("1.-Buscar vehiculo por nombre del dueño\n" +
        "2.-Por posición en el parking\n" +
        "3.-Visualizar todo el parking")
    menu_visualizar = parseInt(menu_visualizar)
    switch (menu_visualizar) {
        case 1:
            var nombre = prompt("Introduce nombre del propietario")
            for (let i = 0; i < aux_ver_posiciones.length; i++) {
                for (let j = 0; j < aux_ver_posiciones[i].length; j++) {
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
            break;
        case 2:
            var ver_pos_i = prompt("Introduce la posición de la fila")
            var ver_pos_j = prompt("Introduce la posición de la columna")
            ver_pos_i = parseInt(ver_pos_i)
            ver_pos_j = parseInt(ver_pos_j)
            if (aux_ver_posiciones[ver_pos_i][ver_pos_j] != 0) {
                alert("En posición: " + ver_pos_i + " , " + ver_pos_j +
                    "\nVehículo guardado: " + aux_ver_posiciones[ver_pos_i][ver_pos_j].tipo +
                    "\nPropietario: " + aux_ver_posiciones[ver_pos_i][ver_pos_j].propietario)
            } else {
                alert("No se encontro ningun vehiculo en la posicion indicada")
            }


            break;
        case 3:
            for (let i = 0; i < aux_ver_posiciones.length; i++) {
                for (let j = 0; j < aux_ver_posiciones[i].length; j++) {
                    aux_vehiculo = aux_ver_posiciones[i][j]
                    tabla = tabla + "|"
                    if (aux_vehiculo.tipo == "coche") {
                        tabla = tabla + (" A " /*+ aux_vehiculo.numero*/)
                    } else if (aux_vehiculo.tipo == "camion") {
                        tabla = tabla + (" C "  /*+ aux_vehiculo.numero*/)
                    }
                    else {
                        tabla = tabla + " O "
                    }
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