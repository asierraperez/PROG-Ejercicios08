/**
 * declaro el objeto padre
 * @returns {object}
 */
function declaro_padre() {
    /**
     * objeto que contiene las variables comunes
     * @type {object}
     */
    var vehiculo = function () {
        this.propietario = ""
        this.numero = 0
        //this.tipo = ""
    }
    vehiculo.prototype.sumar = function () {
        this.numero++
    }


    vehiculo.prototype.restar = function () {
        this.numero--
    }
    vehiculo.prototype.numero = 0

    return vehiculo
}