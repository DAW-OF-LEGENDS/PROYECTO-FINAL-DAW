let darkMode = false;
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
changeThemeMode();

function changeThemeMode(update = false) {
    console.log(update)
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
    document.documentElement.style.setProperty(`--background-cursor-pos`, `${X}% ${Y}%`)
});
document.body.innerHTML += `
    <div id="litleScreen">
        <p><b>La pantalla es muy pequeña</b></p>
        <p>Para que funcione correctamente</p>
        <p>recomendamos minimo</p>
        <p><b>1280p * 720p</b></p>
    </div>
`;