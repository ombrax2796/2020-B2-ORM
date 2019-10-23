const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Déménagement",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE

    let poidstotal=0
    let voyage = 1

    for(i=0; i<input.length; i++){
    let poidscarton = input[i]
    poidstotal += poidscarton
      if (poidstotal > 100){
        voyage += 1
        poidstotal = 0
      }
    }

    return voyage
    // AND HERE
  },
  verify: function (dataset, output) {
    if (dataset.output !== output) {
      throw new Error(`${bright}Got ${output} but expected ${dataset.output}${reset}`)
    } else {
      return true
    }
  }
}