/**
 * compruebo el estado del parking para saber si hay alguna plaza ocupada
 * @param {Array} parking - estado del parking
 * @returns {boolean} - true=> hay al menos una plaza ocupada ;; false => El parking está vacío
 */
function comprobar_parking(parking) {
    /**
     * auxiliar para comprobar el estado del parking
     * @type {array<object>}
     */
    var aux_comprobar_parking = parking
    /**
     * fila del parking
     * @type {number}
     */
    var i = 0
    /**
     * columna del parking
     * @type {number}
     */
    var j = 0
    /**
     * true=> hay al menos una plaza ocupada ;; false => El parking está vacío
     * @type {boolean}
     */
    var encontro_posicion = false
    while ((i < aux_comprobar_parking.length) & (encontro_posicion == false)) {
        while ((j < aux_comprobar_parking[i].length) & (encontro_posicion == false)) {
            if (aux_comprobar_parking[i][j] != 0) {
                encontro_posicion = true
            }
            j++
        }
        i++
    }
    if (encontro_posicion == true) {
        return true
    } else {
        alert("ERROR,\nEl parking está vacío")
        return false
    }
}