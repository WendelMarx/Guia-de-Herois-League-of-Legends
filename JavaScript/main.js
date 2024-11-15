
function convertChampionToLi(champion) {
    return `<li class="champion">
                    <a href="#"> <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg"
                            alt="Imagem do campeão ${champion.id}" class="imgChampionOne"></a> 
                    <div class="descriptionChampion">
                        <p class="subtitle">${champion.title}</p>
                        <h2 class="nameChampion">${champion.id}</h2>
                        <p class="function">Função: ${champion.tags}</p>
                        <aside class="lore">
                            <h3 class="loreTitle">História</h3>
                            <p class="loreDescription">${champion.lore}</p>
                        </aside>
                        <div class="speels">
                            <img src="https://ddragon.leagueoflegends.com/cdn/14.22.1/img/passive/${champion.passive.image.full}"
                                alt="Habilidade da tecla passiva." class="imgSpeelPassive">
                            <aside class="spellKeys"><img
                                    src="https://ddragon.leagueoflegends.com/cdn/14.22.1/img/spell/${champion.spells[0].image.full}"
                                    alt="Habilidade da tecla 'Q'." class="imgSpeel"><img
                                    src="https://ddragon.leagueoflegends.com/cdn/14.22.1/img/spell/${champion.spells[1].image.full}" alt=""
                                    class="imgSpeel"><img
                                    src="https://ddragon.leagueoflegends.com/cdn/14.22.1/img/spell/${champion.spells[2].image.full}" alt=""
                                    class="imgSpeel"><img
                                    src="https://ddragon.leagueoflegends.com/cdn/14.22.1/img/spell/${champion.spells[3].image.full}" alt=""
                                    class="imgSpeel"></aside>
                        </div>
                    </div>
                </li>`
};

leagueOfLegendsApi.getChampions().then((listTenChampions) => {
    const championsOl = document.getElementById('champions')
    championsOl.innerHTML = listTenChampions.map(convertChampionToLi).join('')
})
    .finally(() => console.log(`Requisição concluída.`));
 