const _ = require('lodash')

const main = async () => new Promise((resolve) => {
    setTimeout(() => {
        console.log(_.reverse([1,2,3,4,5,6,7]))
        resolve()
    }, 1000)
})

main()
    .then(function() {
        console.log('process success')
        process.exit(0)
    })
    .catch(function(e) {
        console.error('process failure', e.stack)
        process.exit(-1)
    })
