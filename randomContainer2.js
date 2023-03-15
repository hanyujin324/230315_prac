const randomContainer=document.getElementById('randomContainer');

function Maker(tagName,parent,setAttriName,setAttriValue,text){
  const Element=document.createElement(tagName);
  parent.appendChild(Element);
  Element.setAttribute(setAttriName,setAttriValue);
  Element.textContent=text;
}

let img=Maker('img',randomContainer,'id','img1')

let num = Math.floor((Math.random() * 1008)) + 1
const _URL = `https://pokeapi.co/api/v2/pokemon/${num}`;

const xhr = new XMLHttpRequest();
let beforebutton=Maker('button',randomContainer,'id','before',"←")
let nextbutton=Maker('button',randomContainer,'id','next',"→")

// 검색창
/* document.getElementsByTagName("form")[0].onsubmit = function(){
  // document.getElementById("result").textContent = this.search.value;
  // var inputValue = document.getElementById("result").textContent;
  // console.log(inputValue);
  // ~수정중~
  const _PokeData = JSON.parse(xhr.response);
  if(this.search.value==_PokeData.name){
    document.getElementById("result").textContent = this.search.value;
    var inputValue = document.getElementById("result").textContent;
    console.log(inputValue);
  }
  return false;
} */
// 문제점 1. 이름을 검색하면 나오게 했는데 현재 페이지에 있는 캐릭터이름이어야 인식이 된다. 2. 숫자->사진은 구현 그러나 이름->숫자->사진 순서인데 이름-> 숫자는 구현X 해결방법은 사진이름에 캐릭터 이름이어야 가능하지않을까..
/* //const rookidee='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/821.png';
//const bewear=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/760.png`;
document.getElementsByTagName("form")[0].onsubmit = function(){
  const _PokeData = JSON.parse(xhr.response);
    document.getElementById("result").textContent = this.search.value;
    var inputValue = document.getElementById("result").textContent;
    const searchvalue=this.search.value;
    if(this.search.value='rookidee'){
      img1.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/821.png';
    }else if(this.search.value='bewear'){
      img1.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/760.png`
    }else{

    }
  return false;
}
 */

document.getElementsByTagName("form")[0].onsubmit = function(){
  const _PokeData = JSON.parse(xhr.response);
    // document.getElementById("result").textContent = this.search.value;
    document.getElementById("result").textContent = _PokeData.name;
    var inputValue = document.getElementById("result").textContent;
    const searchvalue=this.search.value;
    console.log(inputValue);
    img1.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${searchvalue}.png`
  return false;
}







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
  console.log(xhr.response);

  const _PokeData = JSON.parse(xhr.response);
  img1.src=_PokeData.sprites.front_default;

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

// 검색창 만들기
/* species:name에 포켓몬 이름이 있다,input 만들기 */
//RegExp 문자열 검색
//onchange 입력후 커서가 input창밖으로 나갈 경우
// let input=Maker('input',randomContainer,'id','search');

//<input id="search" type="text" onchange="searchV()">

// name을 검색하면 이름에 맞는 포켓몬 이미지 나오게 하기 
//포켓몬 이름과 포켓몬 사진 연결 시키기
// const searchName=_PokeData.species.name

console.dir(_PokeData.name)

function searchV(){
  const abc=document.getElementById('search').value;
  document.getElementById('abc').innerHTML=abc;
  //_PokeData.species.name과 _PokeData.species.url을 연결, 이름을 검색하면 관련된 url이 나오고 그 숫자를 이용해서 포켓몬 앞면이 나오게 한다
 // https://pokeapi.co/api/v2/pokemon-species/${searchvalue}/  //_PokeData.species.url
//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${searchvalue}.png // 포켓몬이름을 검색하면 앞면이 나오게 숫자를 연결
// 먼저 글자부터 출력하게 해보기







//이미지 나오게 하기
/* _PokeData.species.name=_PokeData.species.url
searchName=searchvalue;
const a=`https://pokeapi.co/api/v2/pokemon-species/${searchvalue}/`;
const b=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${searchvalue}.png `;
a=b;
img1.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${searchvalue}.png ` */
}

});


console.dir(root);
