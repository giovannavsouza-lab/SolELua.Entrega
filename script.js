async function carregarCidades() {
    const datalist = document.getElementById('lista-cidades');
    const resposta = await fetch(`arquivos_CSV/cidades.csv`);
    const texto = await resposta.text();
    const linhas = texto.trim().split(`\n`).slice(1);

    for (const linha of linhas) {

    
    }
}

 carregarCidades();