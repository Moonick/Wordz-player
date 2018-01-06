export const strToMatrix = str => {
    const matrix = []

    for (let x = 0; x < 4; x++) {
        matrix[x] = []
        for (let y = 0; y < 4; y++) {
             matrix[x][y] = str[x * 4 + y] || ''
        }
    }
    return matrix
}

export const matrixToStr = matrix => {
    return matrix.map(row => row.join('')).join('')
}

export const matrixOfCoords = arrCoords => {
    const matrixOfCoords = []

    for (let x = 0; x < 4; x++) {
        matrixOfCoords[x] = []
        for (let y = 0; y < 4; y++) {
             matrixOfCoords[x][y] = ''
        }
    }

    arrCoords.forEach(([coordX, coordsY], index) => {
        matrixOfCoords[coordX][coordsY] = index + 1
    })

    return matrixOfCoords
}