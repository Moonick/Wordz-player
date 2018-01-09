import {
    LEFT_ARROW,
    RIGTH_ARROW,
    TOP_ARROW,
    TOP_LEFT_ARROW,
    TOP_RIGTH_ARROW,
    BOTTOM_ARROW,
    BOTTOM_LEFT_ARROW,
    BOTTOM_RIGTH_ARROW,
    LAST_ARROW
} from './constants/resultScreen'

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

export const getArrowType = (coords, element) => {
    if (!coords[element]) {
        return LAST_ARROW
    }

    const [ elementX, elementY ] = coords[element - 1]
    const [ nextElementX, nextElementY ] = coords[element]

    if (elementX > nextElementX && elementY > nextElementY) {
        return TOP_LEFT_ARROW
    } else if (elementX > nextElementX && elementY === nextElementY) {
        return TOP_ARROW
    } else if (elementX > nextElementX && elementY < nextElementY) {
        return TOP_RIGTH_ARROW
    } else if (elementX === nextElementX && elementY > nextElementY) {
        return LEFT_ARROW
    } else if (elementX === nextElementX && elementY < nextElementY) {
        return RIGTH_ARROW
    } else if (elementX < nextElementX && elementY > nextElementY) {
        return BOTTOM_LEFT_ARROW
    } else if (elementX < nextElementX && elementY === nextElementY) {
        return BOTTOM_ARROW
    } else if (elementX < nextElementX && elementX < nextElementY) {
        return BOTTOM_RIGTH_ARROW
    }

    return null
}