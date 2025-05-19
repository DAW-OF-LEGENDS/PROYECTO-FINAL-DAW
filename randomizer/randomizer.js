const campeones = [
    "Aatrox", "Ahri", "Akali", "Akshan", "Alistar", "Ambessa", "Amumu", "Anivia", "Annie", "Aphelios",
    "Ashe", "Aurelion Sol", "Aurora", "Azir", "Bardo", "Bel'Veth", "Blitzcrank", "Brand", "Braum", "Briar",
    "Caitlyn", "Camille", "Cassiopeia", "Cho'Gath", "Corki", "Darius", "Diana", "Dr. Mundo", "Draven", "Ekko",
    "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar",
    "Gragas", "Graves", "Gwen", "Hecarim", "Heimerdinger", "Hwei", "Illaoi", "Irelia", "Ivern", "Janna",
    "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "K'Sante", "Kai'Sa", "Kalista", "Karma", "Karthus",
    "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Kha'Zix", "Kindred", "Kled", "Kog'Maw", "LeBlanc",
    "Lee Sin", "Leona", "Lillia", "Lissandra", "Lucian", "Lulu", "Lux", "Maestro Yi", "Malphite", "Malzahar",
    "Maokai", "Mel", "Milio", "Miss Fortune", "Mordekaiser", "Morgana", "Naafiri", "Nami", "Nasus", "Nautilus",
    "Neeko", "Nidalee", "Nilah", "Nocturne", "Nunu y Willump", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy",
    "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus", "Rek'Sai", "Rell", "Renata Glasc", "Renekton", "Rengar",
    "Riven", "Rumble", "Ryze", "Samira", "Sejuani", "Senna", "Seraphine", "Sett", "Shaco", "Shen",
    "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Smolder", "Sona", "Soraka", "Swain", "Sylas",
    "Syndra", "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere",
    "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Vel'Koz", "Vex", "Vi",
    "Viego", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah", "Xerath", "Xin Zhao", "Yasuo",
    "Yone", "Yorick", "Yuumi", "Zac", "Zed", "Zeri", "Ziggs", "Zilean", "Zoe", "Zyra"
];

/**
 * DATOS: RUNAS EN ESPAÑOL (2025)
 */
// Roles
const roles = ["TOP", "JUNGLA", "MID", "ADC", "SUPPORT"];

// Hechizos de invocador
const hechizosInvocador = [
    "FLASH", "PRENDER", "TELEPORT", "CURAR", "BARRERA", 
    "EXTENUAR", "FANTASMAL", "LIMPIAR", "SMITE"
];

// Estructura de runas 2025 en español
const runasData = {
    "Precision": {
        nombre: "Precision",
        keystone: ["Ataque Intensificado", "Compas Letal", "Pies Veloces", "Conquistador"], 
        fila1: ["Absorber vida", "Triunfo", "Claridad Mental"], 
        fila2: ["Leyenda: Presteza", "Leyenda: Velocidad", "Leyenda: Linaje"], 
        fila3: ["Golpe de gracia", "Derribado", "Ultimo esfuerzo"]
    },
    "Dominacion": {
        nombre: "Dominacion",
        keystone: ["Electrocutar", "Cosecha oscura", "Lluvia de cuchillas"], 
        fila1: ["Golpe bajo", "Sabor a sangre", "Impacto repentino"],
        fila2: ["Sexto sentido", "Recuerdo macabro", "Guardian de profundidad"],
        fila3: ["Cazador de tesoros", "Cazador incesante", "Cazador definitivo"]
    },
    "Brujeria": {
        nombre: "Brujeria",
        keystone: ["Invocar a Aery", "Cometa arcano", "Irrupcion de fase"],
        fila1: ["Arcanologo axiomatico", "Banda de mana", "Capa del nimbo"],
        fila2: ["Trascendencia", "Celeridad", "Concentracion absoluta"],
        fila3: ["Pirolaser", "Caminar sobre agua", "Se avecina tormenta"]
    },
    "Valor": {
        nombre: "Valor",
        keystone: ["Garras del inmortal", "Reverberaccion", "Protector"],
        fila1: ["Demoler", "Fuente de vida", "Golpe de escudo"],
        fila2: ["Condicionamiento", "Fuerzas renovadas", "Revestimiento de huesos"],
        fila3: ["Sobrecrecimiento", "Revitalizar", "Inquebrantable"]
    },
    "Inspiracion": {
        nombre: "Inspiracion",
        keystone: ["Mejora glacial", "Libro de hechizos", "Primer golpe"],
        fila1: ["Destello hextech", "Calzado magico", "Reembolso"],
        fila2: ["Tonico triple", "Tonico de distorsion temporal", "Entrega de galletas"],
        fila3: ["Perspicacia cosmica", "Velocidad de acercamiento", "Manitas"]
    }
};

// Fragmentos actualizados en español
const fragmentosData = {
    fila1: ["Fuerza adaptable", "Velocidad de ataque", "Velocidad de habilidades"],
    fila2: ["Fuerza adaptable", "Velocidad de movimiento", "ProgresiOn de vida"], 
    fila3: ["Vida", "Resistencia a tenacidad y ralentizaciOn", "ProgresiOn de vida"]
};

/**
 * FUNCIONES AUXILIARES
 */
// Funcion para obtener un campeon aleatorio
function getCampeonAleatorio() {
    const randomIndex = Math.floor(Math.random() * campeones.length);
    return campeones[randomIndex];
}

// Funcion para obtener un elemento aleatorio de un array
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Funcion para obtener elementos aleatorios sin repetir
function getRandomUniqueElements(array, count) {
    const copy = [...array];
    const result = [];
    
    for (let i = 0; i < count && copy.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * copy.length);
        result.push(copy.splice(randomIndex, 1)[0]);
    }
    
    return result;
}

function fixImageName(image){
    return image.toUpperCase().replaceAll(" ", "_").replaceAll(":", "")
}
/**
 * FUNCION PRINCIPAL PARA ACTUALIZAR CAMPEON
 */
function actualizarCampeon() {
    // Añadir clase para efecto visual de carga
    const campeonDiv = document.querySelector('.campeon');
    const runasDiv = document.querySelector('.runas');

    campeonDiv.classList.add('loading');
    if (runasDiv) runasDiv.classList.add('loading');
    
    // Pequeño timeout para hacer la animacion visible
    setTimeout(() => {

        // Obtener campeon aleatorio
        const nombreCampeon = getCampeonAleatorio();
        
        // Actualizar imagen con manejo de errores
        const imgPath = `url("../src/images/campeones/${nombreCampeon}.png")`;
        console.log(imgPath)
        campeonDiv.querySelector(".campeon").style.backgroundImage = `url("../src/images/campeones/${nombreCampeon}.png")`;
        
        // Actualizar nombre
        campeonDiv.querySelector('h2').textContent = nombreCampeon;
        
        // Actualizar runas
        actualizarRunasSencillo();
        
        // Quitar clases de carga y añadir efecto de transicion
        campeonDiv.classList.remove('loading');
        campeonDiv.classList.add('transition-effect');
        
        if (runasDiv) {
            runasDiv.classList.remove('loading');
            runasDiv.classList.add('transition-effect');
        }
        
        // Eliminar clase de transicion despues de la animacion
        setTimeout(() => {
            campeonDiv.classList.remove('transition-effect');
            if (runasDiv) runasDiv.classList.remove('transition-effect');
        }, 400);
    }, 200);
}

/**
 * FUNCION PARA ACTUALIZAR RUNAS ALEATORIAS
 */
function actualizarRunasSencillo() {
    try {
        console.log("Actualizando runas con metodo simplificado...");
        
        // Obtener todos los elementos p de runas
        const todosLosPdeRunas = document.querySelectorAll('.runa-item p');
        console.log(`Total de elementos p encontrados: ${todosLosPdeRunas.length}`);
        
        if (todosLosPdeRunas.length >= 11) { // debe haber al menos 11 elementos
            // Actualizar rol (indice 0)
            const rolElement = document.querySelector('#ROL');
            const randomRol = getRandomElement(roles)
            rolElement.querySelector('img').src = `../src/images/roles/${randomRol}.svg`;
            rolElement.querySelector('p').textContent = randomRol;
            
            // Actualizar hechizos (indices 1-2)
            const hechizosElement = document.querySelector('#HECHIZOS');
            const randomHechizos = getRandomUniqueElements(hechizosInvocador, 2);
            hechizosElement.querySelectorAll("img")[0].src = `../src/images/hechizos/${fixImageName(randomHechizos[0])}.png`;            
            hechizosElement.querySelectorAll("p")[0].textContent = randomHechizos[0];            
            hechizosElement.querySelectorAll("img")[1].src = `../src/images/hechizos/${fixImageName(randomHechizos[1])}.png`;
            hechizosElement.querySelectorAll("p")[1].textContent = randomHechizos[1];            
            
            // Seleccionar categoria primaria y actualizar (indices 3-6)
            const runaPrimariaElement = document.querySelector('#RUNA-PRIMARIA');
            const catPrimaria = getRandomElement(Object.keys(runasData));
            let keystone = getRandomElement(runasData[catPrimaria].keystone);
            let runa1 = getRandomElement(runasData[catPrimaria].fila1);
            let runa2 = getRandomElement(runasData[catPrimaria].fila2);
            let runa3 = getRandomElement(runasData[catPrimaria].fila3);
            runaPrimariaElement.querySelectorAll("img")[0].src = `../src/images/runas/${fixImageName(keystone)}.png`;
            runaPrimariaElement.querySelectorAll("p")[0].textContent = keystone;
            runaPrimariaElement.querySelectorAll("img")[1].src = `../src/images/runas/${fixImageName(runa1)}.png`;
            runaPrimariaElement.querySelectorAll("p")[1].textContent = runa1;
            runaPrimariaElement.querySelectorAll("img")[2].src = `../src/images/runas/${fixImageName(runa2)}.png`;
            runaPrimariaElement.querySelectorAll("p")[2].textContent = runa2;
            runaPrimariaElement.querySelectorAll("img")[3].src = `../src/images/runas/${fixImageName(runa3)}.png`;
            runaPrimariaElement.querySelectorAll("p")[3].textContent = runa3;
            
            // Eliminar todas las clases de categoria
            runaPrimariaElement.setAttribute('class', 'runa-categoria '+catPrimaria.toLowerCase());
            console.log("Clase añadida a primarias:", catPrimaria.toLowerCase());
            
            // Seleccionar categoria secundaria y actualizar (indices 7-8)
            const runaSecundariaElement = document.querySelector('#RUNA-SECUNDARIA');
            const catDisponibles = Object.keys(runasData).filter(c => c !== catPrimaria);
            const catSecundaria = getRandomElement(catDisponibles);
            const filasSecundarias = getRandomUniqueElements(['fila1', 'fila2', 'fila3'], 2);
            runa1 = getRandomElement(runasData[catSecundaria][filasSecundarias[0]]);
            runa2 = getRandomElement(runasData[catSecundaria][filasSecundarias[1]]);
            runaSecundariaElement.querySelectorAll("img")[0].src = `../src/images/runas/${fixImageName(runa1)}.png`;
            runaSecundariaElement.querySelectorAll("p")[0].textContent = runa1;
            runaSecundariaElement.querySelectorAll("img")[1].src = `../src/images/runas/${fixImageName(runa2)}.png`;
            runaSecundariaElement.querySelectorAll("p")[1].textContent = runa2;
            
            // Actualizar clase CSS de categoria
            runaSecundariaElement.setAttribute('class', 'runa-categoria '+catSecundaria.toLowerCase());
            console.log("Clase añadida a secundarias:", catSecundaria.toLowerCase());
            
            // Actualizar fragmentos (indices 9-11)
            const statsElement = document.querySelector('#ESTADISTICAS');
            const randomStat1 = getRandomElement(fragmentosData.fila1)
            const randomStat2 = getRandomElement(fragmentosData.fila2)
            const randomStat3 = getRandomElement(fragmentosData.fila3)
            statsElement.querySelectorAll("img")[0].src = `../src/images/stats/${fixImageName(randomStat1)}.png`;
            statsElement.querySelectorAll("p")[0].textContent = randomStat1;
            statsElement.querySelectorAll("img")[1].src = `../src/images/stats/${fixImageName(randomStat2)}.png`;
            statsElement.querySelectorAll("p")[1].textContent = randomStat2;
            statsElement.querySelectorAll("img")[2].src = `../src/images/stats/${fixImageName(randomStat3)}.png`;
            statsElement.querySelectorAll("p")[2].textContent = randomStat3;
            
            console.log("¡Runas actualizadas con exito!");
        } else {
            console.error("No se encontraron suficientes elementos p para actualizar las runas");
        }
    } catch (error) {
        console.error("Error al actualizar runas:", error.message);
        console.error("Stack trace:", error.stack);
    }
}

/**
 * FUNCION DE DIAGNOSTICO
 * Para ayudar a depurar problemas con los selectores
 */
function diagnosticarSelectores() {
    console.log("%c=== DIAGNOSTICO DE SELECTORES DOM ===", "font-weight: bold; color: blue;");
    
    // Verificar estructura principal
    const secciones = document.querySelectorAll('.runa-seccion');
    console.log(`Numero de secciones encontradas: ${secciones.length}`);
    
    // Verificar elementos p
    const todosLosP = document.querySelectorAll('.runa-item p');
    console.log(`Total elementos p encontrados: ${todosLosP.length}`);
    
    if (todosLosP.length > 0) {
        console.log("Contenido del primer p:", todosLosP[0].textContent);
    }
    
    // Verificar categorias
    const categorias = document.querySelectorAll('.runa-categoria');
    console.log(`Total categorias encontradas: ${categorias.length}`);
    
    // Verificar si hay titulos h3
    const h3Elements = document.querySelectorAll('.runa-categoria h3');
    console.log(`Titulos h3 encontrados: ${h3Elements.length}`);
    
    if (h3Elements.length > 0) {
        console.log("Primer titulo h3:", h3Elements[0].textContent);
    }
    
    console.log("%c=== FIN DEL DIAGNOSTICO ===", "font-weight: bold; color: blue;");
}

// Ejecutar diagnostico cuando se cargue la pagina
document.addEventListener('DOMContentLoaded', function() {
    actualizarCampeon()
    actualizarRunasSencillo();
    console.log("DOM cargado. Runas disponibles:", Object.keys(runasData));
    diagnosticarSelectores();
});