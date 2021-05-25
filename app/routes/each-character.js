import Route from '@ember/routing/route';

export default class EachCharacterRoute extends Route {

    async model() {
        let dataa = []
        for (let i = 1; i <= 100; i++) {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + i)
            const data = await response.json()
            dataa.pushObject({ name: data.name, id: data.id, imgsrc: data.sprites.front_default })
            
        }
        return dataa;
    }
}
