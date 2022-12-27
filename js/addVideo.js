import { addVideo } from "./apiConection.js";

const form = document.querySelector("[data-form]");

async function addNewVideo(e) {
    e.preventDefault();
    const title = document.querySelector("[data-title]").value;
    const url = document.querySelector("[data-url]").value;
    const image = document.querySelector("[data-img]").value;
    const description = Math.floor(Math.random() * 10).toString();

    try {
        await addVideo(title, url, image, description);
        window.location.href = "../pages/envio-concluido.html";
    } catch (e) {
        alert(e)
    }
}

form.addEventListener("submit", (e) => addNewVideo(e));
