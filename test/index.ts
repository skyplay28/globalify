import '../src'
import * as _ from './@'
globalify(_)
declare global {
    const test: typeof _.test
}
console.log(test)
