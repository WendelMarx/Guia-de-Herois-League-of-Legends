class Champion {
  constructor(id, name, title, tags, blurb) {
    this.id = id;
    this.name = name;
    this.title = title;
    this.tags = tags;
    this.lore = blurb;
    this.image = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.id}_0.jpg`;
  }

  getHTML() {
    return `
      <li class="champion">
        <div class="imgChampion">
        <img class="imgChampionOne" src="${this.image}" alt="${this.name}">
        <div class="imgChampionDescription">
          <h3 class="nameChampion">${this.name}</h3>
          <span class="subtitle">${this.title}</span>
          <p class="function">${this.tags.join(' / ')}</p>
        </div>
        </div>
        <div class="descriptionChampion">
          
          <div class="lore">
            <p class="loreTitle">História:</p>
            <p class="loreDescription">${this.lore}</p>
          </div>
        </div>
      </li>
    `;
  }
}

// -----------------------------------------------------------------------------------

let allChampions = [];
const listChampionsContainer = document.getElementById("listChampions");


async function fetchChampions() {
  const url = "https://ddragon.leagueoflegends.com/cdn/14.15.1/data/pt_BR/champion.json";

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Falha na resposta da rede");

    const data = await response.json();
    allChampions = Object.values(data.data);

    displayChampions();
  } catch (error) {
    console.error("Erro ao buscar campeões:", error);
    listChampionsContainer.innerHTML = `<p class="error-message">Não foi possível carregar os campeões. Tente novamente mais tarde.</p>`;
  }
}


function displayChampions() {
  if (!listChampionsContainer) return;

  const roleFilterElement = document.getElementById("roleFilter");
  const exhibitFilterElement = document.getElementById("exhibitFilter");

  const roleFilter = roleFilterElement ? roleFilterElement.value : "all";
  const quantityFilter = exhibitFilterElement ? parseInt(exhibitFilterElement.value) : allChampions.length;

  let filteredChampions = allChampions;
  if (roleFilter !== "all") {
    filteredChampions = allChampions.filter(champion =>
      champion.tags.map(tag => tag.toLowerCase()).includes(roleFilter.toLowerCase())
    );
  }


  const championsToDisplay = filteredChampions.slice(0, quantityFilter);


  const html = championsToDisplay.map(championData => {
    const champion = new Champion(
      championData.id,
      championData.name,
      championData.title.toUpperCase(),
      championData.tags,
      championData.blurb
    );
    return champion.getHTML();
  }).join("");

  listChampionsContainer.innerHTML = html;
}


document.getElementById("roleFilter")?.addEventListener("change", displayChampions);
document.getElementById("exhibitFilter")?.addEventListener("change", displayChampions);
document.addEventListener("DOMContentLoaded", fetchChampions);
