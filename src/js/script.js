changeThemeMode();
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

function changeThemeMode(update = false) {
    let darkMode = localStorage.getItem("darkMode") === "true";
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
});
