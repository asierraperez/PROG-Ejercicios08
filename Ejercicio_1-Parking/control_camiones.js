function control_camiones(posiciones, n_camiones) {
    var aux_n_camiones = n_camiones
    var aux_control_posiciones = posiciones
    for (let i = 0; i < aux_control_posiciones.length; i++) {
        for (let j = 0; j < aux_control_posiciones[i].length; j++) {
            if (aux_control_posiciones[i][j].tipo == "camion") {
                aux_n_camiones++
                aux_control_posiciones[i][j].numero = aux_n_camiones++
            }
        }
    }
    return aux_n_camiones
}