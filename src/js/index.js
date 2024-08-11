/* 
objetivo - quando clicarmos no botao temos q mostrar a imagem de fundo correspondente
 passo 1 - dar um jeito de pegar o elemento html dos botoes
 passo 2 - dar um jeito de identificar o clique do usuario no botao
 passo 3 - desmarcar o botao selecionado anteriormente
 passo 4 marcar o botao cliecado como se estivesse selecionado
 passo 5 esconder a imagem anterior selecionada
 passo 6 aparecer a imagem correspondente ao botao selecionado
 passo 7 esconder a informacao do dragao anterior  selecionado
 passo 8 mostrar a informacao do dragao referente ao botao clicado
 */

//- passo 1 - dar um jeito de pegar o elemento html dos botoes
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");
//-  passo 2 - dar um jeito de identificar o clique do usuario no botao
botoesCarrossel.forEach((botao, indice)=> {
    botao.addEventListener("click", () => {
        //- passo 3 - desmarcar o botao selecionado anteriormente
        desativarBotaoSelecionado();

        //-  passo 4 marcar o botao cliecado como se estivesse selecionado
        marcarBotaoSelecionado(botao);
        
        //- passo 5 esconder a imagem anterior selecionada
        esconderImagemAtiva();

        //- passo 6 aparecer a imagem correspondente ao botao selecionado
        mostrarImagemDeFundo(indice);

        //- passo 7 esconder a informacao do dragao anterior  selecionado
        esconderInformacaoAtiva();

        //- passo 8 mostrar a informacao do dragao referente ao botao clicado
        MostrarInformacaoAtiva(indice);
    });
});

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function MostrarInformacaoAtiva(indice) {
    informacoes[indice].classList.add("ativa");
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderInformacaoAtiva() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

