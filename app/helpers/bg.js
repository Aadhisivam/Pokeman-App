import { helper } from '@ember/component/helper';
import EmberResolver from 'ember-resolver';


function bg(args) {
  let [arr, func] = args;
  let colors = {
    grass: '#25d925ab',
    poison: '#e628e6ab',
    fire: 'orange',
    flying: 'rgb(0 144 255)',
    water: '#1bd5fffa',
    bug: '#89c76a',
    normal: '#f9faf9b3',
    electric: 'yellow',
    ground: 'lightyellow',
    fairy: 'pink',
    fighting: 'red',
    psychic: 'rgb(94 31 47 / 60%) ',
    steel: 'gray',
    rock: '#7f7b75ab',
    ghost: 'rgb(234 82 138)',
    ice: '#06e0f2',
    dragon: 'rgb(255 70 0 / 72%)',
    dark: '#547476ab',
    shadow: 'rgb(137, 137, 187)'
  }
  let color1, color2;
  if (func == 'grad') {
    if (arr.length == 1) {
      color1 = arr[0].type.name;
      color2 = color1;
      // console.log(color1)
    }
    else {
      color1 = arr[0].type.name;
      color2 = arr[1].type.name;
    }
    return 'background:linear-gradient(144deg,' + colors[color1] + ' 50%, ' + colors[color2] + ' 50%);'
  }
  if (func == 'background') {
    return 'background-color:'+colors[arr];
  }
}



export default helper(bg);