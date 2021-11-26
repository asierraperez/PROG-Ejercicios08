/**
 * declaro el objeto coches
 * @param {object} vehiculo - objeto padre
 * @returns {object}
 */
function declarar_coche(vehiculo) {
    /**
     * objeto coche con sus datos específicos
     * @type {object}
     */
    var coche = function () {
        this.posicion_i
        this.posicion_j
        this.tipo = "coche"
    }
    for (const id in vehiculo.prototype) {
        coche.prototype[id] = vehiculo.prototype[id]
    }

    return coche
}