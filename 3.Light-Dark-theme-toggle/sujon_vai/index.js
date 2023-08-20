// function clickme() {
//   document.getElementById("demo").style.background = "hsl(222, 40%, 13%)";
//   document.getElementById("dem").style.color = "white";
// }
// // clickme()


// define UI Element

const toggle = document.getElementById("toggleDark");
let darkMode = localStorage.getItem('darkMode');

// Define function 

const enableDarkMode = () =>{
    document.body.classList.add('dark-theme');
    localStorage.setItem('darkMode', 'enabled')
}

const disableBarkMode = () =>{
    document.body.classList.remove('dark-theme');
    localStorage.setItem('darkMode', 'disable')
}

if(darkMode === 'enabled'){
    toggle.classList.add('bi-moon')
    enableDarkMode();
}

// Define Event listener 

toggle.addEventListener('click', function (e) {
    let darkMode = localStorage.getItem('darkMode');
    if(darkMode !== 'enabled'){
        this.classList.add('bi-moon');
        enableDarkMode();
    }else{
        this.classList.remove('bi-moon');
        disableBarkMode();
    }
})