import { helper } from '@ember/component/helper';



function width(args){
    let [func]=args;
    console.log(args)
    return "width"+args+";"
}
  


export default helper(width);