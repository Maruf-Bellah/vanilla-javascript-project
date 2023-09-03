function buttonClick(){
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayShow(data))
}

function displayShow(data){
   const show = document.getElementById('demo');
   show.innerText = data.quote;
}
