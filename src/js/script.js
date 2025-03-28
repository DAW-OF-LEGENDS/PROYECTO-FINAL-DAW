let darkMode = false;
changeThemeMode();
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

function changeThemeMode(update = false) {
    darkMode = localStorage.getItem("darkMode") === "true";
    if (update) {
        darkMode = !darkMode;
        localStorage.setItem("darkMode", darkMode.toString());
    }
    document.body.setAttribute("class", darkMode ? "dark-mode" : "light-mode");
}

document.addEventListener('mousemove', (event) => {
    let X = event.clientX / window.innerWidth * 100;
    let Y = event.clientY / window.innerHeight * 100;
    document.body.style.backgroundPosition = `${X}% ${Y}%`;
    if(darkMode){
        document.body.style.setProperty('--custom-bg', `radial-gradient(circle 256px at ${X}% ${Y}%, transparent 50%, rgba(0,0,0,0.125) 100%)`);
    }else{
        document.body.style.setProperty('--custom-bg', `radial-gradient(circle 256px at ${X}% ${Y}%, transparent 50%, rgba(255,255,255,0.125) 100%)`);
    }
});
