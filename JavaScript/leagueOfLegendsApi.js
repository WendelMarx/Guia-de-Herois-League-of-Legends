const leagueOfLegendsApi = {};

leagueOfLegendsApi.getChampions = () => {
    const url = "https://ddragon.leagueoflegends.com/cdn/14.22.1/data/pt_BR/championFull.json"
    return fetch(url)
        .then((response) => response.json())
        .then((championList) => {
            let championListAlphabeticalOrder = Object
                .values(championList.data)
                .sort((a, b) => a.name.localeCompare(b.name));
            return championListAlphabeticalOrder.slice(0,70); // Mudar para a quantidade por página
        })
        .catch((error) => console.error(error))
}