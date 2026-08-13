document.addEventListener("DOMContentLoaded", () => {
    const elementoData = document.getElementById("data-publicacao");

    const hoje = new Date();

    const opcoes = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    };

    elementoData.textContent = hoje.toLocaleDateString("pt-BR", opcoes);

    const titulo = document.querySelector("h1").textContent.trim();
    const subtitulo = document.querySelector(".subtitulo").textContent.trim();
    const paragrafos = document.querySelectorAll(".noticia p");

    const corpo = Array.from(paragrafos)
        .map(paragrafo => paragrafo.textContent.trim())
        .join(" ");

    console.log(`Título: ${titulo.length} caracteres`);
    console.log(`Subtítulo: ${subtitulo.length} caracteres`);
    console.log(`Corpo: ${corpo.length} caracteres`);

    if (titulo.length < 70 || titulo.length > 90) {
        console.warn("O título está fora do limite de 70 a 90 caracteres.");
    }

    if (subtitulo.length < 80 || subtitulo.length > 120) {
        console.warn("O subtítulo está fora do limite de 80 a 120 caracteres.");
    }

    if (corpo.length < 400 || corpo.length > 1200) {
        console.warn("O corpo está fora do limite de 400 a 1.200 caracteres.");
    }
});
