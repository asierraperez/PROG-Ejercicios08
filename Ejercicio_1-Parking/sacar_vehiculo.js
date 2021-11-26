/**
 * sacar vehiculos del parking
 * @param {Array<object>} situacion - lugares libres y ocupados
 * @returns {Array<object>}
 */
function sacar_vehiculo(situacion) {
    /**
     * auxiliar de posiciones
     * @type {Array<object>}
     */
    var aux_Posicion_sacar = situacion
    /**
     * auxiliar, vehiculo individual
     */
    var aux_vehiculo
    /**
     * true=> encontró vehiculo ;; false=> no encontró
     * @type {boolean}
     */
    var encontro_sacar = false
    /**
     * nombre del dueño
     * @type {number}
     */
    var nombre = prompt("PARKING\nEscribe el nombre del dueño del vehiculo")

    for (let i = 0; i < aux_Posicion_sacar.length; i++) {
        for (let j = 0; j < aux_Posicion_sacar[i].length; j++) {
            aux_vehiculo = aux_Posicion_sacar[i][j]
            //compruebo entre las posiciones si existe alguna con ese nombre
            if (aux_vehiculo.propietario == nombre) {
                if (aux_vehiculo.tipo == "camion") {
                    alert("Retirando:" +
                        "\n     Tipo vehiculo: " + aux_vehiculo.tipo +
                        "\n     Propietario: " + aux_vehiculo.propietario +
                        "\n     Posición: (" + aux_vehiculo.posicion_i1 + "," + aux_vehiculo.posicion_j1 +
                        ").(" + aux_vehiculo.posicion_i2 + "," + aux_vehiculo.posicion_j2 + ")")
                    //como los camiones ocupan dos posiciones, hay que borrar las dos de la nmatriz de posiciones
                    aux_Posicion_sacar[aux_vehiculo.posicion_i1][aux_vehiculo.posicion_j1] = 0
                    aux_Posicion_sacar[aux_vehiculo.posicion_i2][aux_vehiculo.posicion_j2] = 0
                    encontro_sacar = true
                } else {
                    alert("Retirando:" +
                        "\n     Tipo vehiculo: " + aux_vehiculo.tipo +
                        "\n     Propietario: " + aux_vehiculo.propietario +
                        "\n     Posición: " + aux_vehiculo.posicion_i + "," + aux_vehiculo.posicion_j)
                    //borro la posicion del coche de la matriz de posiciones
                    aux_Posicion_sacar[aux_vehiculo.posicion_i][aux_vehiculo.posicion_j] = 0
                    encontro_sacar = true
                }

            }

        }

    }
    if (!encontro_sacar) {
        alert("No se encontró el vehiculo con el nombre especificado")
    }
    return aux_Posicion_sacar

}