/* 
Project Requirements : 
-Change the caches,ground color by generating random rgb color by clicking a button  

*/


// step 1 - create onload handler 

// window.onload =() =>{
// main()
// }

// function main(){
//     const root = document.getElementById('root');
//     const btn = document.getElementById('change-btn');


//     btn.addEventListener('click', function(){
//     const bgColor =  generatorRGBColor()
//     root.style.backgroundColor = bgColor;

//     })
// }


window.onload =() => {
main()
}

function main(){
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');

    btn.addEventListener('click', function(){
        const bgColor = generatorRGBcolor()
        root.style.backgroundColor = bgColor;
    })
}

// step 2 - random color generator function


// function generatorRGBColor(){
//     const red = Math.floor(Math.random() * 255)
//     const green = Math.floor(Math.random() * 255)
//     const blue = Math.floor(Math.random() * 255)

//     return `rgb(${red} ,${green}, ${blue})`
  
// }


function generatorRGBcolor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`
}

// step 3 collect all nessary refarance 
// generatorRGBColor(54)