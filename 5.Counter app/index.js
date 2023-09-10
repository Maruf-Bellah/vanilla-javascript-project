var counter = 0;


function sub(){
    if(counter > 0){
        counter -= 1;
    }
    document.getElementById('btn').innerHTML = counter;
    document.getElementById('btn').style='color: red'
}

function add(){

    counter += 1;
    document.getElementById('btn').innerHTML = counter;
    document.getElementById('btn').style='color: #0d6efd'
}

function reset(){
    counter = 0;
    document.getElementById('btn').innerHTML = counter;
    document.getElementById('btn').style='color:  #ffc107'
}