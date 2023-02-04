const header = document.getElementById("header");
const hamburguerIcon = document.getElementById("menu-hamburguer");
const logo = document.getElementById("header-nav-logo-img");
//código para que, no evento de clique no ícone do menu hamburger, o menu possa ser mostrado e também recolhido
hamburguerIcon.addEventListener("click", () => {
    header.classList.toggle("active");
    const navMenu = document.getElementById("header-nav-list");
    //quando o header está ativo
    if (header.classList.contains("active")) {
        navMenu.classList.add("active");
        hamburguerIcon.src = "/images/icon-close.svg";
        hamburguerIcon.classList.add("active-img");
        logo.classList.add("active-img");
        document.body.style.overflowY = "hidden"
        darkModeButton.style.display = "none"
        lightModeButton.style.display = "none"
    //quando header nao esta ativo
    } else {
        navMenu.classList.remove("active");
        hamburguerIcon.src = "/images/icon-hamburger.svg";
        hamburguerIcon.classList.remove("active-img");
        logo.classList.remove("active-img");
        darkModeButton.style.display = "inline-block"
        lightModeButton.style.display = "inline-block"
        document.body.style.overflowY = "visible"
    }

    //se a logo, o menu hamburger e o body contiverem as classes abaixo (quando o menu está aberto) as cores retornarão para o original, pois o menu tem um fundo preto e não há necessidade de inverter as cores das imagens
    if (logo.classList.contains("active-img") && hamburguerIcon.classList.contains("active-img") && body.classList.contains("light-mode")) {
        logo.style.filter = "invert(0)";
        hamburguerIcon.style.filter = "invert(0)";
        console.log("contains-active-img")
    //caso contrario, e a posição scrollY do usuario for maior que 600 e o body contiver a classe light-mode as cores da logo e do icone do menu serão invertidas para que se casem bem com o tema claro
    } else if (scrollY > 600 && body.classList.contains("light-mode")) {
        logo.style.filter = "invert(1)";
        hamburguerIcon.style.filter = "invert(1)";
        console.log("not contains active-img")
    }

})



//código para detectar se o usuário está rolando para cima ou para baixo, caso esteja rolando para baixo o header é escondido e caso esteja rolando pra cima o header é mostrado
let lastScrollTop = 0;

window.addEventListener('scroll', function (e) {
    //mesma posição
    if (e.scrollY === lastScrollTop) {
        header.style.display = "block"
    } else if (this.scrollY > lastScrollTop) {
        header.style.display = "none"
    } else {
        header.style.display = "block"
    }
    lastScrollTop = this.scrollY;

    //se a posição do scrollY do usuário estiver igual ou acima de 600 e o body contiver a classe light-mode serão aplicadas as cores pretas ao header, se não, continua branco
    if (this.scrollY >= 600 && body.classList.contains("light-mode")) {
        header.style.color = "black"
        hamburguerIcon.style.filter = "invert(1)"
        logo.style.filter = "invert(1)"
    } else {
        header.style.color = "white"
        hamburguerIcon.style.filter = "invert(0)"
        logo.style.filter = "invert(0)"
    }
})


const body = document.getElementsByTagName('body')[0];
if (body.classList.contains("light-mode")) {
    header.style.color = "white"
}

//codigo para que os botoes de light-mode e dark-mode funcionem
const lightModeButton = document.querySelector(".light-mode-btn")
const darkModeButton = document.querySelector(".dark-mode-btn")

darkModeButton.addEventListener("click", () => {
    darkModeButton.classList.add("header-nav-theme-btn-active");
    lightModeButton.classList.remove("header-nav-theme-btn-active");

    if (window.scrollY >= 600) {
        header.style.color = "white";
        logo.style.filter = "invert(0)"
        hamburguerIcon.style.filter = "invert(0)";
    }

    if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode")
        body.classList.add("dark-mode");
    }
})

lightModeButton.addEventListener("click", () => {
    lightModeButton.classList.add("header-nav-theme-btn-active");
    darkModeButton.classList.remove("header-nav-theme-btn-active");

    if (window.scrollY >= 600) {
        header.style.color = "black";
        logo.style.filter = "invert(1)";
        hamburguerIcon.style.filter = "invert(1)";
    }

    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode")
        body.classList.add("light-mode");
    }
})

