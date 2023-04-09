const slides = document.querySelectorAll('.slide');
const slideMax = slides.length - 1;
let slideAtual = 0;

const btnAvancar = document.getElementById('seta-avancar');
const btnVoltar = document.getElementById('seta-voltar');

btnAvancar.addEventListener('click', function(){
    if(slideAtual < slideMax) {
        esconderImagem();
        slideAtual++;
        mostrarImagem()

        mostrarEsconderBtn()
    }
})

btnVoltar.addEventListener('click', function(){
    if(slideAtual > 0) {
        esconderImagem();
        slideAtual--;
        mostrarImagem()

        mostrarEsconderBtn()
    }
})

function esconderImagem(){
    slides[slideAtual].classList.remove('ativo');
}

function mostrarImagem() {
    slides[slideAtual].classList.add('ativo');
}

function mostrarEsconderBtn(){
    let primeiroSlide = slideAtual === 0;
    let ultimoSlide = slideAtual === slideMax;

    if(primeiroSlide) {
        btnVoltar.classList.add('desativado');
    } else {
        btnVoltar.classList.remove('desativado');
    }

    if(ultimoSlide) {
        btnAvancar.classList.add('desativado');
    } else {
        btnAvancar.classList.remove('desativado');
    }
}
