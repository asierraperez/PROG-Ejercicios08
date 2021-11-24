function sacar_vehiculo(situacion, coches, camiones) {
    var aux_Posicion_sacar = situacion
    var aux_vehiculo
    var tabla_sacar = ""
    var nombre = prompt("PARKING\nEscribe el nombre del dueño del vehiculo")
    for (let i = 0; i < aux_Posicion_sacar.length; i++) {
        for (let j = 0; j < aux_Posicion_sacar[i].length; j++) {
            aux_vehiculo = aux_Posicion_sacar[i][j]
            if (aux_vehiculo.propietario == nombre) {
                if (aux_vehiculo.tipo == "camion") {
                    alert("Retirando:" +
                        "\n     Tipo vehiculo: " + aux_vehiculo.tipo +
                        "\n     Propietario: " + aux_vehiculo.propietario +
                        "\n     Posición: (" + aux_vehiculo.posicion_i1 + "," + aux_vehiculo.posicion_j1 +
                        ").(" + aux_vehiculo.posicion_i2 + "," + aux_vehiculo.posicion_j2 + ")")
                    aux_Posicion_sacar[aux_vehiculo.posicion_i1][aux_vehiculo.posicion_j1] = 0
                    aux_Posicion_sacar[aux_vehiculo.posicion_i2][aux_vehiculo.posicion_j2] = 0
                } else {
                    alert("Retirando:" +
                        "\n     Tipo vehiculo: " + aux_vehiculo.tipo +
                        "\n     Propietario: " + aux_vehiculo.propietario +
                        "\n     Posición: " + aux_vehiculo.posicion_i + "," + aux_vehiculo.posicion_j)
                    aux_Posicion_sacar[aux_vehiculo.posicion_i][aux_vehiculo.posicion_j] = 0
                }

            }

        }

    }
    return aux_Posicion_sacar

}