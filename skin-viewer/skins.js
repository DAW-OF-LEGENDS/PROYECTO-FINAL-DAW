document.addEventListener('DOMContentLoaded', function() {
    const championList = document.querySelector('.champion-list');
    const container = document.querySelector('.container');
    const skinViewer = document.querySelector('.skin-viewer');
    const skinContainer = document.querySelector('.skin-container');
    const backButton = document.querySelector('.back-button');
    
    // Mapeo de campeones a sus skins (ajusta esto con tus rutas reales)
    
    const championSkins = {
        skins : {
    'Aatrox': ['../src/images/skin/aatrox_justicar.jpg', '../src/images/skin/aatrox_mecha.jpg', '../src/images/skin/aatrox_sea_hunter.jpg'],
    'Ahri': ['../src/images/skin/ahri_dynasty.jpg', '../src/images/skin/ahri_midnight.jpg'],
    'Akali': ['../src/images/skin/akali_infernal.jpg', '../src/images/skin/akali_stinger.jpg'],
    'Akshan': ['../src/images/skin/akshan_crystal_rose.jpg', '../src/images/skin/akshan_cyber_pop.jpg'],
    'Alistar': ['../src/images/skin/alistar_golden.jpg', '../src/images/skin/alistar_matador.jpg'],
    'Ambessa': ['../src/images/skin/ambessa_chosen_of_the_wolf.jpg'],
    'Amumu': ['../src/images/skin/amumu_pharaoh.jpg', '../src/images/skin/amumu_re_gifted.jpg'],
    'Anivia': ['../src/images/skin/anivia_bird_of_prey.jpg', '../src/images/skin/anivia_team_spirit.jpg'],
    'Annie': ['../src/images/skin/annie_goth.jpg', '../src/images/skin/annie_red_riding.jpg'],
    'Aphelios': ['../src/images/skin/aphelios_lunar_beast.jpg', '../src/images/skin/aphelios_nightbringer.jpg'],
    'Ashe': ['../src/images/skin/ashe_freljord.jpg', '../src/images/skin/ashe_sherwood.jpg'],
    'Aurelion Sol': ['../src/images/skin/aurelion_sol_ashen_lord.jpg', '../src/images/skin/aurelion_sol_mecha.jpg'],
    'Aurora': ['../src/images/skin/aurora_battle_bunny.jpg'],
    'Azir': ['../src/images/skin/azir_galactic.jpg', '../src/images/skin/azir_gravelord.jpg'],
    'Bardo': ['../src/images/skin/bard_elderwood.jpg', '../src/images/skin/bard_snow_day.jpg'],
    'Bel\'Veth': ['../src/images/skin/bel\'veth_battle_boss.jpg', '../src/images/skin/bel\'veth_cosmic_matriarch.jpg'],
    'Blitzcrank': ['../src/images/skin/blitzcrank_goalkeeper.jpg', '../src/images/skin/blitzcrank_rusty.jpg'],
    'Brand': ['../src/images/skin/brand_apocalyptic.jpg', '../src/images/skin/brand_vandal.jpg'],
    'Braum': ['../src/images/skin/braum_dragonslayer.jpg', '../src/images/skin/braum_el_tigre.jpg'],
    'Briar': ['../src/images/skin/briar_primordian.jpg', '../src/images/skin/briar_street_demons.jpg'],
    'Caitlyn': ['../src/images/skin/caitlyn_resistance.jpg', '../src/images/skin/caitlyn_sheriff.jpg'],
    'Camille': ['../src/images/skin/camille_coven.jpg', '../src/images/skin/camille_program.jpg'],
    'Cassiopeia': ['../src/images/skin/cassiopeia_desperada.jpg', '../src/images/skin/cassiopeia_siren.jpg'],
    'Cho\'Gath': ['../src/images/skin/cho\'gath_gentleman.jpg', '../src/images/skin/cho\'gath_nightmare.jpg'],
    'Corki': ['../src/images/skin/corki_ice_toboggan.jpg', '../src/images/skin/corki_ufo.jpg'],
    'Darius': ['../src/images/skin/darius_bioforge.jpg', '../src/images/skin/darius_lord.jpg'],
    'Diana': ['../src/images/skin/diana_dark_valkyrie.jpg', '../src/images/skin/diana_lunar_goddess.jpg'],
    'Draven': ['../src/images/skin/draven_gladiator.jpg', '../src/images/skin/draven_soul_reaver.jpg'],
    'Ekko': ['../src/images/skin/ekko_academy.jpg', '../src/images/skin/ekko_sandstorm.jpg'],
    'Elise': ['../src/images/skin/elise_death_blossom.jpg', '../src/images/skin/elise_victorious.jpg'],
    'Evelynn': ['../src/images/skin/evelynn_masquerade.jpg', '../src/images/skin/evelynn_shadow.jpg'],
    'Ezreal': ['../src/images/skin/ezreal_nottingham.jpg', '../src/images/skin/ezreal_striker.jpg'],
    'Fiddlesticks': ['../src/images/skin/fiddlesticks_spectral.jpg', '../src/images/skin/fiddlesticks_union_jack.jpg'],
    'Fiora': ['../src/images/skin/fiora_nightraven.jpg', '../src/images/skin/fiora_royal_guard.jpg'],
    'Fizz': ['../src/images/skin/fizz_atlantean.jpg', '../src/images/skin/fizz_tundra.jpg'],
    'Galio': ['../src/images/skin/galio_enchanted.jpg', '../src/images/skin/galio_hextech.jpg'],
    'Gangplank': ['../src/images/skin/gangplank_minuteman.jpg', '../src/images/skin/gangplank_spooky.jpg'],
    'Garen': ['../src/images/skin/garen_desert_trooper.jpg', '../src/images/skin/garen_sanguine.jpg'],
    'Gnar': ['../src/images/skin/gnar_dino.jpg', '../src/images/skin/gnar_gentleman.jpg'],
    'Gragas': ['../src/images/skin/gragas_hillbilly.jpg', '../src/images/skin/gragas_scuba.jpg'],
    'Graves': ['../src/images/skin/graves_hired_gun.jpg', '../src/images/skin/graves_jailbreak.jpg'],
    'Gwen': ['../src/images/skin/gwen_cafe_cuties.jpg', '../src/images/skin/gwen_space_groove.jpg'],
    'Hecarim': ['../src/images/skin/hecarim_blood_knight.jpg', '../src/images/skin/hecarim_reaper.jpg'],
    'Heimerdinger': ['../src/images/skin/heimerdinger_alien_invader.jpg', '../src/images/skin/heimerdinger_blast_zone.jpg'],
    'Hwei': ['../src/images/skin/hwei_winterblessed.jpg'],
    'Ivern': ['../src/images/skin/ivern_candy_king.jpg', '../src/images/skin/ivern_dunkmaster.jpg'],
    'Janna': ['../src/images/skin/janna_hextech.jpg', '../src/images/skin/janna_tempest.jpg'],
    'Jarvan IV': ['../src/images/skin/jarvan_iv_commando.jpg', '../src/images/skin/jarvan_iv_dragonslayer.jpg'],
    'Jax': ['../src/images/skin/jax_the_mighty.jpg', '../src/images/skin/jax_vandal.jpg'],
    'Jayce': ['../src/images/skin/jayce_debonair.jpg', '../src/images/skin/jayce_full_metal.jpg'],
    'Jhin': ['../src/images/skin/jhin_blood_moon.jpg', '../src/images/skin/jhin_high_noon.jpg'],
    'Jinx': ['../src/images/skin/jinx_crime_city.jpg', '../src/images/skin/jinx_firecracker.jpg'],
    'K\'Sante': ['../src/images/skin/k\'sante_empyrean.jpg', '../src/images/skin/k\'sante_prestige_empyrean.jpg'],
    'Kai\'Sa': ['../src/images/skin/kai\'sa_bullet_angel.jpg', '../src/images/skin/kai\'sa_k_da.jpg'],
    'Kalista': ['../src/images/skin/kalista_blood_moon.jpg', '../src/images/skin/kalista_worlds_2015.jpg'],
    'Karma': ['../src/images/skin/karma_sakura.jpg', '../src/images/skin/karma_sun_goddess.jpg'],
    'Karthus': ['../src/images/skin/karthus_phantom.jpg', '../src/images/skin/karthus_statue_of.jpg']
}
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