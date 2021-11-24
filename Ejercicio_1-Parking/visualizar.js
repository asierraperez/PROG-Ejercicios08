function visualizar(posiciones) {
    var aux_ver_posiciones = posiciones
    var tabla = ""
    var aux_vehiculo
    for (let i = 0; i < aux_ver_posiciones.length; i++) {
        //if (i % 2 == 0) {
        //for (let k = 0; k < (aux_ver_posiciones.length + 2); k++) {
        //    tabla = tabla + " - "
        //    if (k == (aux_ver_posiciones.length + 1)) {
        //        tabla = tabla + "\n"
        //    }
        // }
        // }
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
}