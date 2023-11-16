document.addEventListener('DOMContentLoaded', function() {
    
    let a=prompt("Traveler Enter Your Name :")
    let b=prompt("Where You Want To start Your Exploration ?")
    
    document.getElementById("name").textContent=`Master Name : ${a}`;
    document.getElementById("from").textContent=`From : ${b}`;
    
    
    
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
        .then(res => res.json())
        .then(res => vapolam(res));
        
        let lists=document.getElementById("list")
    
    function vapolam(res) {
        let va = Object.entries(res);
    
        for (let i = 0; i < va[3][1].length; i++) {
            let name = va[3][1][i].name;
            let names = `<option>${name}</option>`;
            lists.innerHTML+=names; 
        }
    }
    
    
    fetch(`https://pokeapi.co/api/v2/generation/1/`)
    .then(rese => rese.json())
    .then(rese=>typeFunction(rese))
    
    let types=document.getElementById("type")
    
    function typeFunction(rese) {
        let ty = Object.entries(rese)
        
        for (let i = 0; i < ty[7][1].length; i++) {
              let typ = ty[7][1][i].name;
              let typesOption=`<option>${typ}</option>`
            types.innerHTML+=typesOption;
          }
        
    }
    
    
    
    fetch(`https://pokeapi.co/api/v2/generation/1/`)
    .then(resei => resei.json())
    .then(resei=>reseiFun(resei))
    
    let generation=document.getElementById("Generition")
    
    function reseiFun(resei) {
        let re = Object.entries(resei)
          for (let i = 0; i < re[3][1].length; i++) {
            let moviesList=re[3][1][i].name;
            let movies=`<option>${moviesList}</option>`
            generation.innerHTML+=movies;
            
          }
    }
    
    
    let rt = document.getElementById("img2")
    
    let btn=document.getElementById("btn")
    btn.addEventListener("click",()=>{
        btn.style.backgroundColor="white"
        btn.style.color="black"
    
        const style = document.createElement('style');
    const cssAnimation = `
        #img2 {
            width: 50px;
            position: relative;
            top: 160px;
            border-radius: 100px;
            animation: rotate infinite ease-out 2s;
        }
    
        @keyframes rotate {
            100% {
                transform: rotate(360deg);
            }
        }
    `;
    style.appendChild(document.createTextNode(cssAnimation));
    document.head.appendChild(style);
    
    
        })
        
});
