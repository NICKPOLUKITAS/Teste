alert('Quantos esportes você acha que tem nas paralimpiadas?');
let quantosEsportesTem = 15;
let chute = prompt('Cite de 1 a 20');
let tentativas = 1;

while (chute != quantosEsportesTem) {
    chute = prompt('Cite de 1 a 20'); //nao entrar,ate acertar


if (chute == quantosEsportesTem) {
    alert(`Obá, você acertou usando ${tentativas} tentativas`);
} else {
    if (chute > quantosEsportesTem) {
        alert('A quantidade de Esportes é menor');
    
    } else {
        alert('A quantidade de Esportes é maior');
    
}
 tentativas++;
} 
}

$(document).ready(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() < $("#green").height()){
         $(".navbar").removeClass("bg-dark");
      }
      else{
         $(".navbar").addClass("bg-dark");
      }
    });
  });

  

document.getElementById('openIframe').addEventListener('click', (event) => {
    event.preventDefault(); // Previne o comportamento padrão do link
    const iframeContainer = document.getElementById('iframeContainer');
    const smallIframe = document.getElementById('smallIframe');
    
    smallIframe.src = "página.html"; // URL da página que você quer abrir
    iframeContainer.style.display = 'block'; // Exibe o container do iframe
});


