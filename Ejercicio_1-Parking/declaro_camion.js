function declarar_camion(vehiculo) {
    var camion = function () {
        this.posicion_i1
        this.posicion_i2
        this.posicion_j1
        this.posicion_j2
        this.tipo = "camion"


    }
    for (const id in vehiculo.prototype) {
        camion.prototype[id] = vehiculo.prototype[id]
    }
    //camion.tipo = 
    return camion
}