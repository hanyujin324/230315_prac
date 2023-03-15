const body = document.getElementsByTagName("body");
const root = document.getElementById('root');
const mainContainer = document.getElementById('mainContainer');
// 태그 생성 함수
function CreateTag(tagname) {
  let element = document.createElement(tagname);
  return element;
}
//태그 선택 함수
function getTagname(get) {
  let getTag = document.getElementsByTagName(get);
  return getTag;
}
//div 생성 후 컨테이너 자식으로 넣기
for (let i = 0; i < 6; i++) {
  let div = CreateTag("div");
  mainContainer.appendChild(div);
  let img = CreateTag('img');
  div.appendChild(img);
}
mainContainer.style.display = "flex";
mainContainer.style.flexDirection = "row";
function pokemonBoxStyle(w, h, bg, bor) {
  let pokemonBoxLength = mainContainer.children;
  for (let i = 0; i < pokemonBoxLength.length; i++) {
    console.log("스타일링");
    let pokemonBox = mainContainer.children[i];
    pokemonBox.style.width = w;
    pokemonBox.style.height = h;
    pokemonBox.style.backgroundColor = 
    pokemonBox.style.border = bor;
  }
}

//스타일링 값 입력 (width, height, bgColor, border)
pokemonBoxStyle("200px", "200px", "green", "1px solid black");
let array = [];
let newArrLength = 0;
do {
  for (let i = 0; i < 6; i++) {
    let a = Math.floor(Math.random() * 1000 + 1);
    array[i] = a;
  }
  const set = new Set(array);
  const newArr = [...set]; //...연산은 객체를 벗겨줌.
  array = newArr;
  newArrLength = newArr.length;
}
while (newArrLength < 6);

const _URL0 = `https://pokeapi.co/api/v2/pokemon/${array[0]}`;
const _URL1 = `https://pokeapi.co/api/v2/pokemon/${array[1]}`;
const _URL2 = `https://pokeapi.co/api/v2/pokemon/${array[2]}`;
const _URL3 = `https://pokeapi.co/api/v2/pokemon/${array[3]}`;
const _URL4 = `https://pokeapi.co/api/v2/pokemon/${array[4]}`;
const _URL5 = `https://pokeapi.co/api/v2/pokemon/${array[5]}`;
const URL =[`https://pokeapi.co/api/v2/pokemon/${array[0]}`,`https://pokeapi.co/api/v2/pokemon/${array[1]}`,`https://pokeapi.co/api/v2/pokemon/${array[2]}`,`https://pokeapi.co/api/v2/pokemon/${array[3]}`,`https://pokeapi.co/api/v2/pokemon/${array[4]}`,`https://pokeapi.co/api/v2/pokemon/${array[5]}`]


for(let i =0;i<6;i++){
window.addEventListener('load',()=>{
const xhr = new XMLHttpRequest();
  xhr.open('GET', URL[i]);
  xhr.send();
    xhr.addEventListener('load', function () {
      const _PokeData = JSON.parse(xhr.response);
      mainContainer.children[i].children[0].src = _PokeData.sprites.front_default;
    })
      
      //fetch(_URL).then((response)=> response.json()).then((data){img.src=data.sprites.front_default})
  })  
  }
/*   document.getElementsByTagName("form")[0].onsubmit = function(){
    this.key=document.querySelector([`input[name=srarch]`])
    document.getElementById("result").textContent = this.search.value;
    var inputValue = document.getElementById("result").textContent;
    console.log(input);
    return false;
  } */
  //검색창에 입력을 하면 포켓몬이 몇번에 있는지 나타내고 그 배열을 이용해서 나타나게 한다
  
  
  