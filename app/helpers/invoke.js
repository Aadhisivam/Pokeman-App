import { helper } from '@ember/component/helper';



function invoke(args){
    let [func]=args;
    console.log(func)
    return args
}
  


export default helper(invoke);