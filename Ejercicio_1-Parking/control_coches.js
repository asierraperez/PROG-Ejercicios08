function control_coches(aux_posiciones, coches, n_coches) {
    var aux_control_coches = aux_posiciones
    var aux_control_n_coches = n_coches
    var aux_control_coches = coches
    for (let i = 0; i < aux_control_coches.length; i++) {
        for (let j = 0; j < aux_control_coches[i].length; j++) {
            if (aux_control_coches[i][j] == aux_control_coches) {
                aux_control_coches[i][j].numero = aux_control_n_coches
            }

        }

    }


    return aux_control_coches
}