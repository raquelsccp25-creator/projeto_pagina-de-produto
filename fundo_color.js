function mudarTema(tipo) {
    const corpo = document.body;
    const preco = document.querySelector('.preco');
    const titulo = document.getElementById('titulo-produto');
    const paragrafo = document.getElementById('paragrafo-produto');

    if (tipo === 'dark') {
        corpo.style.backgroundColor = ""; // Limpa cores fixas
        corpo.classList.add('modo-animado');
        
        // Mantém as cores internas pretas e verdes, sem animação neles
        if (titulo) titulo.style.color = "#000000";
        if (paragrafo) paragrafo.style.color = "#000000";
        if (preco) preco.style.color = "#2e7d32";

    } else if (tipo === 'light') {
        corpo.classList.remove('modo-animado');
        corpo.style.backgroundColor = "#f0f4f8";

        if (titulo) titulo.style.color = "#000000";
        if (paragrafo) paragrafo.style.color = "#000000";
        if (preco) preco.style.color = "#2e7d32";
    }
}