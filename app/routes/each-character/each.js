import Route from '@ember/routing/route';

export default class EachCharacterEachRoute extends Route {
   async model(params){
       let {id}=params;
       console.log(id)
       const response =await fetch('https://pokeapi.co/api/v2/pokemon/'+id)
       const data=await response.json();
       return data;


   }
}
