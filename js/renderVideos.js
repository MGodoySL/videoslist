import { getVideosList, searchVideos } from "./apiConection.js";

const videosList = document.querySelector("[data-list]");
const btnSearch = document.querySelector("[data-btnSearch]");
const searchTerm = document.querySelector("#pesquisar");

btnSearch.addEventListener("click", async (e) => {
    e.preventDefault();
    const videos = await searchVideos(searchTerm.value);
    searchedVideos(videos);
});

function videoCardCreator(titulo, descricao, url, imagem) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `<iframe width="100% height="72%" src="${url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="descricao-video">
    <img src="${imagem}" alt="logo canal alura">
    <h3>${titulo}</h3>
    <p>${descricao}</p>
    </div>`;

    return video;
}

function searchedVideos(videos) {
    videosList.innerHTML = "";

    if (videos.length <= 0) {
        videosList.innerHTML = `<h2 class="mensagem__titulo"> Não existe video com estes termos</h2>`;
    } else {
        videos.forEach((video) => {
            videosList.appendChild(videoCardCreator(video.titulo, video.descricao, video.url, video.imagem));
        });
    }
}

async function videosListApi() {
    try {
        const list = await getVideosList();

        list.forEach((e) => {
            videosList.appendChild(videoCardCreator(e.titulo, e.descricao, e.url, e.imagem));
        });
    } catch {
        videosList.innerHTML = `<h2 class="mensagem__titulo"> Não foi possível carregar a lista de videos</h2>`;
    }
}

videosListApi();
