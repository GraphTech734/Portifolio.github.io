document.addEventListener('DOMContentLoaded', function() {
    console.log("Script carregado");

    // Função vermais
    window.vermais = function(element) {
        let content = element.parentElement;
        let maisTexto = content.querySelector(".mais");
        let carrossel = content.querySelector(".sd");

        if (maisTexto.style.display === "none") {
            maisTexto.style.display = "inline";
            carrossel.classList.remove('active'); // Esconde o carrossel ao recolher o texto
            element.innerHTML = "Ver mais";
        } else {
            maisTexto.style.display = "none";
            carrossel.classList.add('active'); // Mostra o carrossel ao expandir o texto
            element.innerHTML = "Ver menos";
        }

        // Oculta a segunda parte do texto (.mais) ao recolher
        let pontos = content.querySelector(".pontos");
        if (pontos) pontos.style.display = maisTexto.style.display === "none" ? "inline" : "none";
    }

    // Menu flutuante
    const floatingItem = document.querySelector('.floating-item');
    const menuOptions = document.querySelector('.options');

    floatingItem.addEventListener('click', function(event) {
        event.stopPropagation(); // Impede que o clique no floatingItem seja capturado pelo document
        this.classList.toggle('active');

        // Mostrar ou esconder as opções dependendo do estado do menu
        if (this.classList.contains('active')) {
            menuOptions.classList.add('show');
        } else {
            menuOptions.classList.remove('show');
        }
    });

    // Fechar o menu se clicar fora dele
    document.addEventListener('click', function(event) {
        if (!floatingItem.contains(event.target) && !menuOptions.contains(event.target)) {
            floatingItem.classList.remove('active');
            menuOptions.classList.remove('show');
        }
    });

    // Evitar fechar o menu ao clicar dentro das opções
    menuOptions.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    // Pegue o modal
    var modal = document.getElementById("myModal");

    // Pegue a imagem e o modal
    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");

    // Quando a imagem é clicada, abra o modal
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }

    // Quando o usuário clica no botão de fechar, feche o modal
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() { 
        modal.style.display = "none";
    }

    // Quando o usuário clica fora do modal, feche o modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});


function toggleMenu() {
    var menu = document.getElementById("Menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}