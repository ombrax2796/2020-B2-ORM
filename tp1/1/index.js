const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Marathon",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE
    let position = input[0]
    
    for(i=1; i<input.length; i++){
      let dépasse =input[i].split(' ')

      position += parseInt(dépasse[0])
      position -= parseInt(dépasse[1])
    }

    if (position<= 100){
      return 1000
    }else if(position > 100 && position <= 10000) {
      return 100
    } else if(position>10000){
      return 'KO'
    }

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