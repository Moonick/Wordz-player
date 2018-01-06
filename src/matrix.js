import { sortBy, uniqBy, filter, compose } from 'ramda'
import dictionary from '../dictionary.json'

const getWord = (coords, letters) => {
    return coords.map(([x,y]) => {
        return letters[x][y]
    }).join('')
}

const kuvRub = (letters, x, y, numberOfletters, arrCoordinates, arrayWords) => {
    const isOutOfBounds = x > 3 || x < 0 || y > 3 || y < 0

    if (isOutOfBounds) {
        return
    }

    const isLooping = arrCoordinates.some(([x1, y1]) => x1 === x && y1 === y)

    if (isLooping) {
        return
    }

    arrCoordinates = arrCoordinates.concat([[x, y]])
    
    const currentWord = getWord(arrCoordinates, letters)

    const isWordExisting = dictionary.hasOwnProperty(currentWord)

    if (!isWordExisting) {
        return
    }

    if (arrCoordinates.length === numberOfletters) {
        arrayWords.push({word: getWord(arrCoordinates, letters), coords: arrCoordinates})
        return
    }

    kuvRub(letters, x, y + 1, numberOfletters, arrCoordinates, arrayWords)
    kuvRub(letters, x + 1, y, numberOfletters, arrCoordinates, arrayWords)
    kuvRub(letters, x - 1, y, numberOfletters, arrCoordinates, arrayWords)
    kuvRub(letters, x, y - 1, numberOfletters, arrCoordinates, arrayWords)
    kuvRub(letters, x + 1, y + 1, numberOfletters, arrCoordinates, arrayWords)
    kuvRub(letters, x - 1, y - 1, numberOfletters, arrCoordinates, arrayWords)
    kuvRub(letters, x - 1, y + 1, numberOfletters, arrCoordinates, arrayWords)
    kuvRub(letters, x + 1, y - 1, numberOfletters, arrCoordinates, arrayWords)
}

export default letters => {
    const arrayWords = []

    for (let y = 0; y < letters.length; y++) {
        for (let x = 0; x < letters[y].length; x++) {
            for (let numberOfletters = 3; numberOfletters <= 10; numberOfletters++) {
                kuvRub(letters, x, y, numberOfletters, [], arrayWords)
            }
        }
    }

    return compose(
        uniqBy(({word}) => word),
        sortBy(({word}) => word.length),
        filter(({word}) => dictionary[word] === 1)
    )(arrayWords)
}