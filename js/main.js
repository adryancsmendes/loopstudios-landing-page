const header = document.getElementById("header");
const hamburguerIcon = document.getElementById("menu-hamburguer");

//código para que, no evento de clique no ícone do menu hamburger, o menu possa ser mostrado e também recolhido
hamburguerIcon.addEventListener("click", () =>{
    header.classList.toggle("active");
    const navMenu = document.getElementById("header-nav-list");

    if(header.classList.contains("active")){
        navMenu.classList.add("active");
        hamburguerIcon.src = "/images/icon-close.svg";
        document.body.style.overflowY = "hidden"
    }else{
        navMenu.classList.remove("active");
        hamburguerIcon.src = "/images/icon-hamburger.svg";
        document.body.style.overflowY = "visible"
    }
})


//código para detectar se o usuário está rolando para cima ou para baixo, caso esteja rolando para baixo o header é escondido e caso esteja rolando pra cima o header é mostrado
let lastScrollTop = 0;

window.addEventListener('scroll', function (e) {
    //mesma posição
    if (e.scrollY === lastScrollTop){
        return;
    }else if(this.scrollY > lastScrollTop){
        header.style.display = "none"
    }else{
        header.style.display = "block"
    }
    lastScrollTop = this.scrollY;
    
  })