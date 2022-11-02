// Capturar el click en el botón dark y hacer un toggle con la clase dark además de cambiar la src de img a sun.png

document.querySelector("#dark").addEventListener("click", () => {
    document.querySelector("body").classList.toggle("dark");
    let darkOn = document.querySelector("body").classList;
    
    if ( darkOn.contains ("dark")){
        document.querySelector("#dark img").setAttribute("src", "sun.gif");
    } else {
        document.querySelector("#dark img").setAttribute("src", "moon.png");

    }
});
