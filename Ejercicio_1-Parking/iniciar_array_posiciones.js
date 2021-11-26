/**
 * inicializo el array de posiciones del parking a 0
 * @returns {array<number>}
 */
function iniciar_array_posiciones() {
    /**
     * array de posiciones del parking
     * @type {array<number>}
     */
    var posiciones = []
    for (let i = 0; i < 5; i++) {
        posiciones[i] = []
        for (let j = 0; j < 5; j++) {
            posiciones[i][j] = 0
        }
    }
    return posiciones
}