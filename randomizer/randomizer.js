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
const roles = ["TOP", "JUNGLE", "MID", "ADC", "SUPPORT"];

// Hechizos de invocador
const hechizosInvocador = [
    "FLASH", "IGNITE", "TELEPORT", "HEAL", "BARRIER", 
    "EXHAUST", "GHOST", "CLEANSE", "SMITE", "HASTE"
];

// Estructura de runas 2025 en español
const runasData = {
    "Precision": {
        nombre: "Precisión",
        color: "#ff9800",
        keystone: ["Ataque Intensificado", "Compás Letal", "Pies Veloces", "Conquistador"], 
        fila1: ["Absorber vida", "Triunfo", "Claridad Mental"], 
        fila2: ["Legenda: Presteza", "Legenda: Velocidad", "Legenda: Linaje"], 
        fila3: ["Golpe de gracia", "Derribado", "Último esfuerzo"]
    },
    "Dominacion": {
        nombre: "Dominación",
        color: "#f44336",
        keystone: ["Electrocutar", "Cosecha oscura", "Lluvia de cuchillas"], 
        fila1: ["Golpe bajo", "Sabor a sangre", "Impacto repentino"],
        fila2: ["Sexto sentido", "Recuerdo macabro", "Guardian de profundidad"],
        fila3: ["Cazador de tesoros", "Cazador incesante", "Cazador definitivo"]
    },
    "Brujeria": {
        nombre: "Brujería",
        color: "#2196f3",
        keystone: ["Invocar a Aery", "Cometa arcano", "Irrupcion de fase"],
        fila1: ["Arcanólogo axiomático", "Banda de maná", "Capa del nimbo"],
        fila2: ["Trascendencia", "Celeridad", "Concentración absoluta"],
        fila3: ["Piroláser", "Caminar sobre agua", "Se avecina tormenta"]
    },
    "Valor": {
        nombre: "Valor",
        color: "#4caf50",
        keystone: ["Garras del inmortal", "Reverberacción", "Protector"],
        fila1: ["Demoler", "Fuente de vida", "Golpe de escudo"],
        fila2: ["Condicionamiento", "Fuerzas renovadas", "Revestimiento de huesos"],
        fila3: ["Sobrecrecimiento", "Revitalizar", "Inquebrantable"]
    },
    "Inspiracion": {
        nombre: "Inspiración",
        color: "#cddc39",
        keystone: ["Mejora glacial", "Libro de hechizos", "Primer golpe"],
        fila1: ["Destello hextech", "Calzado mágico", "Reembolso"],
        fila2: ["Tónico triple", "Tónico de distorsión temporal", "Entrega de galletas"],
        fila3: ["Perspicacia cósmica", "Velocidad de acercamiento", "Manitas"]
    }
};

// Fragmentos actualizados en español
const fragmentosData = {
    fila1: ["Fuerza adaptable", "Velocidad de ataque", "Velocidad de habilidades"],
    fila2: ["Fuerza adaptable", "Velocidad de movimiento", "Progresión de vida"], 
    fila3: ["Vida", "Resistencia a tenacidad y ralentización", "Progresión de vida"]
};

/**
 * FUNCIONES AUXILIARES
 */
// Función para obtener un campeón aleatorio
function getCampeonAleatorio() {
    const randomIndex = Math.floor(Math.random() * campeones.length);
    return campeones[randomIndex];
}

// Función para obtener un elemento aleatorio de un array
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Función para obtener elementos aleatorios sin repetir
function getRandomUniqueElements(array, count) {
    const copy = [...array];
    const result = [];
    
    for (let i = 0; i < count && copy.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * copy.length);
        result.push(copy.splice(randomIndex, 1)[0]);
    }
    
    return result;
}

/**
 * FUNCIÓN PRINCIPAL PARA ACTUALIZAR CAMPEÓN
 */
function actualizarCampeon() {
    // Añadir clase para efecto visual de carga
    const campeonDiv = document.querySelector('.campeon');
    const runasDiv = document.querySelector('.runas');
    
    campeonDiv.classList.add('loading');
    if (runasDiv) runasDiv.classList.add('loading');
    
    // Pequeño timeout para hacer la animación visible
    setTimeout(() => {
        // Obtener campeón aleatorio
        const nombreCampeon = getCampeonAleatorio();
        
        // Actualizar imagen con manejo de errores
        const imgElement = campeonDiv.querySelector('img');
        imgElement.onerror = function() {
            console.error(`Error: No se encontró imagen para ${nombreCampeon}`);
            this.src = '../src/images/campeones/default.png';
        };
        
        imgElement.src = `../src/images/campeones/${nombreCampeon}.png`;
        imgElement.alt = nombreCampeon;
        
        // Actualizar nombre
        const nombreElement = campeonDiv.querySelector('h2');
        nombreElement.textContent = nombreCampeon;
        
        // Actualizar runas
        actualizarRunasSencillo();
        
        // Quitar clases de carga y añadir efecto de transición
        campeonDiv.classList.remove('loading');
        campeonDiv.classList.add('transition-effect');
        
        if (runasDiv) {
            runasDiv.classList.remove('loading');
            runasDiv.classList.add('transition-effect');
        }
        
        // Eliminar clase de transición después de la animación
        setTimeout(() => {
            campeonDiv.classList.remove('transition-effect');
            if (runasDiv) runasDiv.classList.remove('transition-effect');
        }, 400);
    }, 200);
}

/**
 * FUNCIÓN PARA ACTUALIZAR RUNAS ALEATORIAS
 */
function actualizarRunasSencillo() {
    try {
        console.log("Actualizando runas con método simplificado...");
        
        // Obtener todos los elementos p de runas
        const todosLosPdeRunas = document.querySelectorAll('.runa-item p');
        console.log(`Total de elementos p encontrados: ${todosLosPdeRunas.length}`);
        
        if (todosLosPdeRunas.length >= 11) { // debe haber al menos 11 elementos
            // Actualizar rol (índice 0)
            todosLosPdeRunas[0].textContent = getRandomElement(roles);
            
            // Actualizar hechizos (índices 1-2)
            const hechizos = getRandomUniqueElements(hechizosInvocador, 2);
            todosLosPdeRunas[1].textContent = hechizos[0];
            todosLosPdeRunas[2].textContent = hechizos[1];
            
            // Seleccionar categoría primaria y actualizar (índices 3-6)
            const catPrimaria = getRandomElement(Object.keys(runasData));
            todosLosPdeRunas[3].textContent = getRandomElement(runasData[catPrimaria].keystone);
            todosLosPdeRunas[4].textContent = getRandomElement(runasData[catPrimaria].fila1);
            todosLosPdeRunas[5].textContent = getRandomElement(runasData[catPrimaria].fila2);
            todosLosPdeRunas[6].textContent = getRandomElement(runasData[catPrimaria].fila3);
            
            // Actualizar título primaria
            const tituloPrimarias = document.querySelector('.runa-seccion:nth-child(4) .runa-categoria:nth-child(1) h3');
            if (tituloPrimarias) {
                tituloPrimarias.textContent = runasData[catPrimaria].nombre.toUpperCase();
                console.log("Título primarias actualizado:", tituloPrimarias.textContent);
            }
            
            // Actualizar clase CSS primaria
            const contenedorPrimarias = document.querySelector('.runa-seccion:nth-child(4) .runa-categoria:nth-child(1)');
            if (contenedorPrimarias) {
                // Eliminar todas las clases de categoría
                Object.keys(runasData).forEach(cat => {
                    contenedorPrimarias.classList.remove(cat.toLowerCase());
                });
                contenedorPrimarias.classList.add(catPrimaria.toLowerCase());
                console.log("Clase añadida a primarias:", catPrimaria.toLowerCase());
            }
            
            // Seleccionar categoría secundaria y actualizar (índices 7-8)
            const catDisponibles = Object.keys(runasData).filter(c => c !== catPrimaria);
            const catSecundaria = getRandomElement(catDisponibles);
            const filasSecundarias = getRandomUniqueElements(['fila1', 'fila2', 'fila3'], 2);
            todosLosPdeRunas[7].textContent = getRandomElement(runasData[catSecundaria][filasSecundarias[0]]);
            todosLosPdeRunas[8].textContent = getRandomElement(runasData[catSecundaria][filasSecundarias[1]]);
            
            // Actualizar título secundaria
            const tituloSecundarias = document.querySelector('.runa-seccion:nth-child(2) .runa-categoria:nth-child(2) h3');
            if (tituloSecundarias) {
                tituloSecundarias.textContent = runasData[catSecundaria].nombre.toUpperCase();
                console.log("Título secundarias actualizado:", tituloSecundarias.textContent);
            }
            
            // Actualizar clase CSS secundaria
            const contenedorSecundarias = document.querySelector('.runa-seccion:nth-child(2) .runa-categoria:nth-child(2)');
            if (contenedorSecundarias) {
                // Eliminar todas las clases de categoría
                Object.keys(runasData).forEach(cat => {
                    contenedorSecundarias.classList.remove(cat.toLowerCase());
                });
                contenedorSecundarias.classList.add(catSecundaria.toLowerCase());
                console.log("Clase añadida a secundarias:", catSecundaria.toLowerCase());
            }
            
            // Actualizar fragmentos (índices 9-11)
            todosLosPdeRunas[9].textContent = getRandomElement(fragmentosData.fila1);
            todosLosPdeRunas[10].textContent = getRandomElement(fragmentosData.fila2);
            todosLosPdeRunas[11].textContent = getRandomElement(fragmentosData.fila3);
            
            console.log("¡Runas actualizadas con éxito!");
        } else {
            console.error("No se encontraron suficientes elementos p para actualizar las runas");
        }
    } catch (error) {
        console.error("Error al actualizar runas:", error.message);
        console.error("Stack trace:", error.stack);
    }
}

/**
 * FUNCIÓN DE DIAGNÓSTICO
 * Para ayudar a depurar problemas con los selectores
 */
function diagnosticarSelectores() {
    console.log("%c=== DIAGNÓSTICO DE SELECTORES DOM ===", "font-weight: bold; color: blue;");
    
    // Verificar estructura principal
    const secciones = document.querySelectorAll('.runa-seccion');
    console.log(`Número de secciones encontradas: ${secciones.length}`);
    
    // Verificar elementos p
    const todosLosP = document.querySelectorAll('.runa-item p');
    console.log(`Total elementos p encontrados: ${todosLosP.length}`);
    
    if (todosLosP.length > 0) {
        console.log("Contenido del primer p:", todosLosP[0].textContent);
    }
    
    // Verificar categorías
    const categorias = document.querySelectorAll('.runa-categoria');
    console.log(`Total categorías encontradas: ${categorias.length}`);
    
    // Verificar si hay títulos h3
    const h3Elements = document.querySelectorAll('.runa-categoria h3');
    console.log(`Títulos h3 encontrados: ${h3Elements.length}`);
    
    if (h3Elements.length > 0) {
        console.log("Primer título h3:", h3Elements[0].textContent);
    }
    
    console.log("%c=== FIN DEL DIAGNÓSTICO ===", "font-weight: bold; color: blue;");
}

// Ejecutar diagnóstico cuando se cargue la página
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM cargado. Runas disponibles:", Object.keys(runasData));
    diagnosticarSelectores();
    
    // Agregar estilos dinámicamente para los nuevos árboles de runas
    const estilosRunas = document.createElement('style');
    estilosRunas.textContent = `
        .brujeria {
            border-color: #2196f3 !important;
        }
        .brujeria h3 {
            color: #2196f3 !important;
        }
        
        .valor {
            border-color: #4caf50 !important;
        }
        .valor h3 {
            color: #4caf50 !important;
        }
        
        /* Estilos de depuración para ver mejor los cambios */
        .runa-categoria {
            transition: border-color 0.3s, background-color 0.3s;
        }
        
        .runa-categoria.precision { background-color: rgba(255, 152, 0, 0.1); }
        .runa-categoria.dominacion { background-color: rgba(244, 67, 54, 0.1); }
        .runa-categoria.brujeria { background-color: rgba(33, 150, 243, 0.1); }
        .runa-categoria.valor { background-color: rgba(76, 175, 80, 0.1); }
        .runa-categoria.inspiracion { background-color: rgba(205, 220, 57, 0.1); }
    `;
    document.head.appendChild(estilosRunas);
});