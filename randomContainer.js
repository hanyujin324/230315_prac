const randomContainer=document.getElementById('randomContainer');
function Maker(tagName,parent,setAttriName,setAttriValue,text){
  const Element=document.createElement(tagName);
  parent.appendChild(Element);
  Element.setAttribute(setAttriName,setAttriValue);
  Element.textContent=text;
}
let img=Maker('img',randomContainer,'id','img1')
let num = Math.floor((Math.random() * 1260)) + 1
//let num = 953
const _URL = `https://pokeapi.co/api/v2/pokemon/${num}`;
console.log(_URL)
const xhr = new XMLHttpRequest();
let beforebutton=Maker('button',randomContainer,'id','before',"←")
let nextbutton=Maker('button',randomContainer,'id','next',"→")
 //검색값나옴
  document.getElementsByTagName("form")[0].onsubmit = function(){
    document.getElementById("result").textContent = this.search.value;
    var inputValue = document.getElementById("result").textContent;
    console.log(inputValue);
    return false;
  }
  // const pokemon = require('pokemon');
  // let array = pokemon.all('ko')
  // console.log(array.findIndex((value)=>value=="이상해씨"));
   const pokeAll = document.createElement('div');
  // name = _PokeData.sprites.name;
  // h1.textContent = _PokeData.name;
  // root.appendChild(h1);
randomContainer.children[1].addEventListener('click',function(){
  num--;
const _URL = `https://pokeapi.co/api/v2/pokemon/${num}`;
  xhr.open('GET', _URL);
  xhr.send();
  xhr.addEventListener('load',function() {
  const _PokeData = JSON.parse(xhr.response);
  img1.src=_PokeData.sprites.front_default;
})
})
randomContainer.children[2].addEventListener('click',function(){
  num++;
const _URL = `https://pokeapi.co/api/v2/pokemon/${num}`;
  xhr.open('GET', _URL);
  xhr.send();
  xhr.addEventListener('load',function() {
  const _PokeData = JSON.parse(xhr.response);
  img1.src=_PokeData.sprites.front_default;
})
})
console.dir(randomContainer)
xhr.open('GET', _URL);
xhr.send();
xhr.addEventListener('load', function() {
  //console.log(xhr.response);
  const _PokeData = JSON.parse(xhr.response);
  img1.src=_PokeData.sprites.front_default;
  const h1 = document.createElement('h1');
  name = _PokeData.sprites.name;
  h1.textContent = _PokeData.name;
  root.appendChild(h1);
  randomContainer.addEventListener('mouseover', function(){
  if(_PokeData.sprites.back_default ==null){
    img1.src=_PokeData.sprites.front_default
  }else{
    img1.src=_PokeData.sprites.back_default
  }
 })
 randomContainer.addEventListener('mouseout', function(){
    img1.src=_PokeData.sprites.front_default
 })
//back_default
console.dir(_PokeData)
console.log(_PokeData)
});
//console.dir(root);