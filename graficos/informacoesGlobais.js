const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarinformacoeGlobais() {
    const res = await fetch(url)
    const dados= await res.json()
    console.log(dados);
    const paragrafo = document.createAttributeElement('p')
    paragrafo.classlist.add ('graficos-conteiner_texto')
    paragrafo.innerHTML = `você sabia que o mundo tem ${dados.total_pessoas_mundo} de pessoas e que aproximadamente ${dados.total_pessoas_conectadas}estão total_pessoas_conectadas em alguma rede social e passam em média ${dados.tempo_medio} horas total_pessoas_conectadas.`
console.log(paragrafo)

const contrainer = document.getElementById('graficos-conteiner')
contrainer.appendChild(paragrafo)
}
vizualizarinformacoeGlobais().catch
