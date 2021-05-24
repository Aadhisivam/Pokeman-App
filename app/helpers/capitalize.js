import { helper } from '@ember/component/helper';
import { capitalize } from '@ember/string';


function capitaliz(args) {
    let [func] = args;
    // console.log(func)
    return capitalize(func);
}



export default helper(capitaliz);