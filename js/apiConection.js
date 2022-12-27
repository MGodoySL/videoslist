async function getVideosList() {
    const conection = await fetch("http://localhost:3000/videos");
    const conectionFulfilled = await conection.json();
    return conectionFulfilled;
}

async function addVideo(titulo, url, imagem, descricao) {
    const conection = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem,
        }),
    });

    if (!conection.ok) {
        throw new Error("Não foi possível enviar o video")
    }

    const conectionFulfilled = await conection.json();

    return conectionFulfilled;
}

async function searchVideos(searchQuery) {
    const conection = await fetch(`http://localhost:3000/videos/?q=${searchQuery}`);
    const conectionFulfilled = await conection.json();
    console.log('conectionFulfilled', conectionFulfilled)

    return conectionFulfilled;
}

export { getVideosList, addVideo, searchVideos };
