import { helper } from '@ember/component/helper';



function search(args){
    let [searchName,modelName]=args;
    // console.log(searchName,'+',modelName)
    if(searchName==undefined){
      return true;
    }
    return modelName.startsWith(searchName.toLowerCase())
}
  


export default helper(search);