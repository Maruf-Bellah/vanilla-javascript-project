/* 
Project Requirements : 
-Change the caches,ground color by generating random rgb color by clicking a button  

*/

// step 1 - create onload handler

window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const btn = document.getElementById("change-btn");
  const output = document.getElementById("output");

  btn.addEventListener("click", function () {
    const bgColor = generatorRGBcolor();
    root.style.backgroundColor = bgColor;
    output.value =bgColor;
  });
}

// step 2 - random color generator function

function generatorRGBcolor() {
  // #000000 #ffffff
  // 255, 255, 255 -> #FFFFFF
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  const show = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
  // console.log(show);
  // document.getElementById('demo').innerHTML =show;

  return show;
}

// step 3 collect all nessary refarance
// generatorRGBColor(54)
