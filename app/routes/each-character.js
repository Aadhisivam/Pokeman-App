import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';
export default class EachCharacterRoute extends Route {
    // @tracked searchItem
    async model() {
        let dataa = []
        for (let i = 1; i <= 200; i++) {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + i)
            const data = await response.json()
            // console.log(response.body)
            dataa.pushObject({ name: data.name, id: data.id, imgsrc: data.sprites.front_default,type:data.types })
            
        }
        return dataa;
    }
}
