const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarinformacoeGlobais() {
    const res = await fetch(url)
    const dados= await res.json()
    const pessoasConectas = (dado.total_pessoas_conectadas/ 1e9)
    const pessoasNoMundo = (dados.tempo_medio)
    const horas = parseInt(dados.tempo_medio - horas)
    const minutos = Math.round((dados.tempo_medio) * 100)



    console.log(dados);
    const paragrafo = document.createAttributeElement('p')
    paragrafo.classlist.add ('graficos-conteiner_texto')
    paragrafo.innerHTML = `você sabia que o mundo tem <span>${dados.total_pessoas_mundo}</span> de pessoas e que aproximadamente <span>${dados.total_pessoas_conectadas}</span>estão total_pessoas_conectadas em alguma rede social e passam em média <span>${dados.tempo_medio}</span> horas total_pessoas_conectadas.`
console.log(paragrafo)

const contrainer = document.getElementById('graficos-conteiner')
contrainer.appendChild(paragrafo)
}

vizualizadorInformacoesGlobais()
