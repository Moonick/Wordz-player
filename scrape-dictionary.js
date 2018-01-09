const fs = require('fs')
const { promisify } = require('util')
const request = require('request')
const get = promisify(request.get.bind(request))

//<a href="https://www.t-rechnik.info/words/index/-%D0%B0%D0%BB">-ал</a>
const re = /\<a.*\>(.*)\<\/a\>/
const extractWord = ({ duma }) => {
  const matches = duma.match(re)

  return matches && matches[1]
}

const main = async () => {
  const { body: { data } } = await get({
    url: 'https://www.t-rechnik.info/data?draw=1&columns[0][data]=duma&columns[0][name]=duma&columns[0][searchable]=true&columns[0][orderable]=true&columns[0][search][value]=&columns[0][search][regex]=false&columns[1][data]=opisanie&columns[1][name]=opisanie&columns[1][searchable]=true&columns[1][orderable]=true&columns[1][search][value]=&columns[1][search][regex]=false&order[0][column]=0&order[0][dir]=asc&start=0&length=35000&search[regex]=false&_=1514800819333',
    json: true
  })

  const dictionary = data.map(extractWord).filter(Boolean).reduce((acc, word) => {
    acc[word] = 1

    for (let i = word.length -1; i > 0; i--) {

        if (acc[word.slice(0, i)] !== 1) {
          acc[word.slice(0, i)] = 0
        }
    }

    return acc
  }, {})

  fs.writeFileSync('./dictionary.json', JSON.stringify(dictionary))
}

main()
