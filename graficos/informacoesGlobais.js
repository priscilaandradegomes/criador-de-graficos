'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarinformacoeGlobais() {
    const res =wait fetch(url)
    const dados=await res.json()
    console.log(dados);
}

vizualizarinformacoeGlobais()