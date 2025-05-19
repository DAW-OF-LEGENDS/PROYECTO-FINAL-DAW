document.addEventListener('DOMContentLoaded', function() {
const championList = document.querySelector('.champion-list');
const container = document.querySelector('.container');
const skinViewer = document.querySelector('.skin-viewer');
const skinContainer = document.querySelector('.skin-container');
const backButton = document.querySelector('.back-button');
    
    // Mapeo de campeones a sus skins (ajusta esto con tus rutas reales)
    
    const championSkins = {
    'Aatrox': ['aatrox_justicar.jpg','aatrox_mecha.jpg', 'aatrox_sea_hunter.jpg'],
    'Ahri': ['ahri_dynasty.jpg', 'ahri_midnight.jpg'],
    'Akali': ['akali_infernal.jpg', 'akali_stinger.jpg'],
    'Akshan': ['akshan_crystal_rose.jpg', 'akshan_cyber_pop.jpg'],
    'Alistar': ['alistar_golden.jpg', 'alistar_matador.jpg'],
    'Ambessa': ['ambessa_chosen_of_the_wolf.jpg'],
    'Amumu': ['amumu_pharaoh.jpg', 'amumu_re_gifted.jpg'],
    'Anivia': ['anivia_bird_of_prey.jpg', 'anivia_team_spirit.jpg'],
    'Annie': ['annie_goth.jpg', 'annie_red_riding.jpg'],
    'Aphelios': ['aphelios_lunar_beast.jpg', 'aphelios_nightbringer.jpg'],
    'Ashe': ['ashe_freljord.jpg', 'ashe_sherwood.jpg'],
    'Aurelion Sol': ['aurelion_sol_ashen_lord.jpg', 'aurelion_sol_mecha.jpg'],
    'Aurora': ['aurora_battle_bunny.jpg'],
    'Azir': ['azir_galactic.jpg', 'azir_gravelord.jpg'],
    'Bardo': ['bard_elderwood.jpg', 'bard_snow_day.jpg'],
    'Bel\'Veth': ['bel\'veth_battle_boss.jpg', 'bel\'veth_cosmic_matriarch.jpg'],
    'Blitzcrank': ['blitzcrank_goalkeeper.jpg', 'blitzcrank_rusty.jpg'],
    'Brand': ['brand_apocalyptic.jpg', 'brand_vandal.jpg'],
    'Braum': ['braum_dragonslayer.jpg', 'braum_el_tigre.jpg'],
    'Briar': ['briar_primordian.jpg', 'briar_street_demons.jpg'],
    'Caitlyn': ['caitlyn_resistance.jpg', 'caitlyn_sheriff.jpg'],
    'Camille': ['camille_coven.jpg', 'camille_program.jpg'],
    'Cassiopeia': ['cassiopeia_desperada.jpg', 'cassiopeia_siren.jpg'],
    'Cho\'Gath': ['cho\'gath_gentleman.jpg', 'cho\'gath_nightmare.jpg'],
    'Corki': ['corki_ice_toboggan.jpg', 'corki_ufo.jpg'],
    'Darius': ['darius_bioforge.jpg', 'darius_lord.jpg'],
    'Diana': ['diana_dark_valkyrie.jpg', 'diana_lunar_goddess.jpg'],
    'Draven': ['draven_gladiator.jpg', 'draven_soul_reaver.jpg'],
    'Ekko': ['ekko_academy.jpg', 'ekko_sandstorm.jpg'],
    'Elise': ['elise_death_blossom.jpg', 'elise_victorious.jpg'],
    'Evelynn': ['evelynn_masquerade.jpg', 'evelynn_shadow.jpg'],
    'Ezreal': ['ezreal_nottingham.jpg', 'ezreal_striker.jpg'],
    'Fiddlesticks': ['fiddlesticks_spectral.jpg', 'fiddlesticks_union_jack.jpg'],
    'Fiora': ['fiora_nightraven.jpg', 'fiora_royal_guard.jpg'],
    'Fizz': ['fizz_atlantean.jpg', 'fizz_tundra.jpg'],
    'Galio': ['galio_enchanted.jpg', 'galio_hextech.jpg'],
    'Gangplank': ['gangplank_minuteman.jpg', 'gangplank_spooky.jpg'],
    'Garen': ['garen_desert_trooper.jpg', 'garen_sanguine.jpg'],
    'Gnar': ['gnar_dino.jpg', 'gnar_gentleman.jpg'],
    'Gragas': ['gragas_hillbilly.jpg', 'gragas_scuba.jpg'],
    'Graves': ['graves_hired_gun.jpg', 'graves_jailbreak.jpg'],
    'Gwen': ['gwen_cafe_cuties.jpg', 'gwen_space_groove.jpg'],
    'Hecarim': ['hecarim_blood_knight.jpg', 'hecarim_reaper.jpg'],
    'Heimerdinger': ['heimerdinger_alien_invader.jpg', 'heimerdinger_blast_zone.jpg'],
    'Hwei': ['hwei_winterblessed.jpg'],
    'Ivern': ['ivern_candy_king.jpg', 'ivern_dunkmaster.jpg'],
    'Janna': ['janna_hextech.jpg', 'janna_tempest.jpg'],
    'Jarvan IV': ['jarvan_iv_commando.jpg', 'jarvan_iv_dragonslayer.jpg'],
    'Jax': ['jax_the_mighty.jpg', 'jax_vandal.jpg'],
    'Jayce': ['jayce_debonair.jpg', 'jayce_full_metal.jpg'],
    'Jhin': ['jhin_blood_moon.jpg', 'jhin_high_noon.jpg'],
    'Jinx': ['jinx_crime_city.jpg', 'jinx_firecracker.jpg'],
    'K\'Sante': ['k\'sante_empyrean.jpg', 'k\'sante_prestige_empyrean.jpg'],
    'Kai\'Sa': ['kai\'sa_bullet_angel.jpg', 'kai\'sa_k_da.jpg'],
    'Kalista': ['kalista_blood_moon.jpg', 'kalista_worlds_2015.jpg'],
    'Karma': ['karma_sakura.jpg', 'karma_sun_goddess.jpg'],
    'Karthus': ['karthus_phantom.jpg', 'karthus_statue_of.jpg']
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
    if (!skins || skins.length === 0) {
        alert(`No hay skins disponibles para ${championName}`);
        return;
    }
    
    container.style.display = 'none';
    skinViewer.style.display = 'block';
    skinContainer.innerHTML = `<h2>SKINS DE ${championName.toUpperCase()}</h2>`;
    
    skins.forEach(skin => {
        const skinDiv = document.createElement('div');
        skinDiv.className = 'skin-item';
        
        const skinImg = document.createElement('img');
        // Ruta corregida:
        skinImg.src = `../src/images/skin/${skin}`;
        skinImg.alt = `${championName} - ${skin.replace('.jpg', '').replace(/_/g, ' ')}`;
        
        const skinName = document.createElement('p');
        skinName.textContent = skin.replace('.jpg', '').replace(/_/g, ' ');
        
        skinDiv.appendChild(skinImg);
        skinDiv.appendChild(skinName);
        skinContainer.appendChild(skinDiv);
    });
}
    
    // Manejar botón de volver
    backButton.addEventListener('click', function() {
        skinViewer.style.display = 'none';
        container.style.display = 'block';
        skinContainer.innerHTML = ''; // Limpiar las skins al volver
    });
});