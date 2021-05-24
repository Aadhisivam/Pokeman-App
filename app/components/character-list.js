import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import fetch from 'fetch';

export default class CharacterListComponent extends Component {
    @tracked name
    @tracked dataa=[]
    // @action
    // async some() {
        
    //     const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=200');
    //     console.log(response)
    //     const photos = await response.json();
    //     this.name=photos.results;
    //     console.log(photos)
        
        

    // }

    // @action
    // async image(Imgurl){
    //     const response = await fetch(Imgurl);
    //     const photos = await response.json();
    //     this.imgSrc=photos.sprites.front_shiny
    //     console.log(this.imgSrc)
        
    // }

    @action
    async nameAndImage(){
        for(let i=1;i<=100;i++){
            const response=await fetch('https://pokeapi.co/api/v2/pokemon/'+i)
            const data=await response.json()
            this.dataa.pushObject({name:data.name,height:data.height,weight:data.weight,id:data.id,imgsrc:data.sprites.front_default})
        }
       console.log(this.dataa) 
       
    }
 
}