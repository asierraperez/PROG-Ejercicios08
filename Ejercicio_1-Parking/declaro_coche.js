function declarar_coche(vehiculo) {
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