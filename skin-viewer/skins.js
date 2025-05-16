document.addEventListener('DOMContentLoaded', function() {
    const championList = document.querySelector('.champion-list');
    const container = document.querySelector('.container');
    const skinViewer = document.querySelector('.skin-viewer');
    const skinContainer = document.querySelector('.skin-container');
    const backButton = document.querySelector('.back-button');
    
    // Mapeo de campeones a sus skins (ajusta esto con tus rutas reales)
    const championSkins = {
        'Aatrox': ['Aatrox_skin1.jpg', 'Aatrox_skin2.jpg'],
        'Ahri': ['Ahri_skin1.jpg', 'Ahri_skin2.jpg', 'Ahri_skin3.jpg'],
        'Akali': [],
        'Akshan': [],
        'Alistar': [],
        'Ambessa': [],
        'Amumu': [],
        'Anivia': [],
        'Annie': [],
        'Aphelios': [],
        'Ashe': [],
        'Aurelion Sol': [],
        'Aurora': [],
        'Azir': [],
        'Bardo': [],
        'Bel\'Veth': [],
        'Blitzcrank': [],
        'Brand': [],
        'Braum': [],
        'Briar': [],
        'Caitlyn': [],
        'Camille': [],
        'Cassiopeia': [],
        'Cho\'Gath': [],
        'Corki': [],
        'Darius': [],
        'Diana': [],
        'Dr. Mundo': [],
        'Draven': [],
        'Ekko': [],
        'Elise': [],
        'Evelynn': [],
        'Ezreal': [],
        'Fiddlesticks': [],
        'Fiora': [],
        'Fizz': [],
        'Galio': [],
        'Gangplank': [],
        'Garen': [],
        'Gnar': [],
        'Gragas': [],
        'Graves': [],
        'Gwen': [],
        'Hecarim': [],
        'Heimerdinger': [],
        'Hwei': [],
        'Illaoi': [],
        'Irelia': [],
        'Ivern': [],
        'Janna': [],
        'Jarvan IV': [],
        'Jax': [],
        'Jayce': [],
        'Jhin': [],
        'Jinx': [],
        'K\'Sante': [],
        'Kai\'Sa': [],
        'Kalista': [],
        'Karma': [],
        'Karthus': [],
        'Kassadin': [],
        'Katarina': [],
        'Kayle': [],
        'Kayn': [],
        'Kennen': [],
        'Kha\'Zix': [],
        'Kindred': [],
        'Kled': [],
        'Kog\'Maw': [],
        'LeBlanc': [],
        'Lee Sin': [],
        'Leona': [],
        'Lillia': [],
        'Lissandra': [],
        'Lucian': [],
        'Lulu': [],
        'Lux': [],
        'Maestro Yi': [],
        'Malphite': [],
        'Malzahar': [],
        'Maokai': [],
        'Mel': [],
        'Milio': [],
        'Miss Fortune': [],
        'Mordekaiser': [],
        'Morgana': [],
        'Naafiri': [],
        'Nami': [],
        'Nasus': [],
        'Nautilus': [],
        'Neeko': [],
        'Nidalee': [],
        'Nilah': [],
        'Nocturne': [],
        'Nunu y Willump': [],
        'Olaf': [],
        'Orianna': [],
        'Ornn': [],
        'Pantheon': [],
        'Poppy': [],
        'Pyke': [],
        'Qiyana': [],
        'Quinn': [],
        'Rakan': [],
        'Rammus': [],
        'Rek\'Sai': [],
        'Rell': [],
        'Renata Glasc': [],
        'Renekton': [],
        'Rengar': [],
        'Riven': [],
        'Rumble': [],
        'Ryze': [],
        'Samira': [],
        'Sejuani': [],
        'Senna': [],
        'Seraphine': [],
        'Sett': [],
        'Shaco': [],
        'Shen': [],
        'Shyvana': [],
        'Singed': [],
        'Sion': [],
        'Sivir': [],
        'Skarner': [],
        'Smolder': [],
        'Sona': [],
        'Soraka': [],
        'Swain': [],
        'Sylas': [],
        'Syndra': [],
        'Tahm Kench': [],
        'Taliyah': [],
        'Talon': [],
        'Taric': [],
        'Teemo': [],
        'Thresh': [],
        'Tristana': [],
        'Trundle': [],
        'Tryndamere': [],
        'Twisted Fate': [],
        'Twitch': [],
        'Udyr': [],
        'Urgot': [],
        'Varus': [],
        'Vayne': [],
        'Veigar': [],
        'Vel\'Koz': [],
        'Vex': [],
        'Vi': [],
        'Viego': [],
        'Viktor': [],
        'Vladimir': [],
        'Volibear': [],
        'Warwick': [],
        'Wukong': [],
        'Xayah': [],
        'Xerath': [],
        'Xin Zhao': [],
        'Yasuo': [],
        'Yone': [],
        'Yorick': [],
        'Yuumi': [],
        'Zac': [],
        'Zed': [],
        'Zeri': [],
        'Ziggs': [],
        'Zilean': [],
        'Zoe': [],
        'Zyra': []
    };
    
    // Manejar clic en un campeón
    championList.addEventListener('click', function(e) {
        const listItem = e.target.closest('li');
        if (!listItem) return;
        
        const championName = listItem.querySelector('span').textContent;
        showSkins(championName);
    });
    
    // Función para mostrar las skins
    function showSkins(championName) {
        const skins = championSkins[championName];
        if (!skins) return;
        
        // Ocultar lista y mostrar viewer
        container.style.display = 'none';
        skinViewer.style.display = 'block';
        
        // Limpiar contenedor y añadir título
        skinContainer.innerHTML = `<h2>Skins de ${championName}</h2>`;
        
        // Añadir cada skin
        skins.forEach(skin => {
            const skinImg = document.createElement('img');
            skinImg.src = `../src/images/skins/${championName}/${skin}`;
            skinImg.alt = `${championName} - ${skin}`;
            skinContainer.appendChild(skinImg);
        });
    }
    
    // Manejar botón de volver
    backButton.addEventListener('click', function() {
        skinViewer.style.display = 'none';
        container.style.display = 'block';
    });
});