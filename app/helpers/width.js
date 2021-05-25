import { helper } from '@ember/component/helper';



function width(args){
    let [func]=args;
    console.log("width:"+func+";")
    return "width:"+func+"px;"
}
  


export default helper(width);