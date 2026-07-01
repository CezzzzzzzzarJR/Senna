const frasesSenna = [
    "Eu não tenho ídolos. Tenho admiração por trabalho, dedicação e competência.",
    "Se você quer ser bem-sucedido, precisa ter uma dedicação total, buscar seu último limite.",
    "O segundo é o primeiro dos perdedores.",
    "Na adversidade, uns desistem, enquanto outros batem recordes.",
    "Se você chega no ponto onde ninguém mais consegue chegar, você é o melhor.",
    "No que diz respeito ao empenho, ao compromisso, ao esforço, à dedicação, não existe meio termo."
];

function rotacionarFrase() {
    const campo = document.getElementById('campo-frase');
    const indice = Math.floor(Math.random() * frasesSenna.length);
    campo.textContent = `"${frasesSenna[indice]}"`;
}

window.onload = function() {
    rotacionarFrase();
    // Troca a frase automaticamente a cada 6 segundos
    setInterval(rotacionarFrase, 6000);
};
