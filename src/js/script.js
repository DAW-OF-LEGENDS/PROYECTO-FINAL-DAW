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
    document.documentElement.style.setProperty(`--background-cursor-pos`, `${X}% ${Y}%`)
});
