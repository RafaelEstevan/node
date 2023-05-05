const _ = require('lodash')

const a = [1, 2, 3, 4, 5]
const b = [2, 7, 3, 9, 5]

const diff = _.difference(a, b)

console.log(diff)