// Seleciona todas as seções da página e os links do menu de navegação.
let sections = document.querySelectorAll('section')
let linksDoMenu = document.querySelectorAll('nav a')

// Escuta o evento de scroll para identificar qual seção está mais próxima do topo da tela.
window.addEventListener('scroll', function(){
    for(let i = 0; i < sections.length; i++){
        let topo = sections[i].getBoundingClientRect().top

        // Verifica se a seção está visível na área de destaque do viewport.
        // Se estiver próxima ao topo e ainda não saiu da tela, ela é considerada a seção atual.
        if(topo < 200 && topo > -sections[i].offsetHeight){
            // Remove a marcação de ativo de todos os links do menu.
            for(let i = 0; i < linksDoMenu.length; i++){
                linksDoMenu[i].classList.remove('ativo')
            }

            // Marca como ativo o link do menu que corresponde à seção atual.
            let linkAtual = document.querySelector('nav a[href="#' + sections[i].id + '"]')

            linkAtual.classList.add('ativo')
        }

    }
})

// Cria um observador para detectar quando elementos entram na área visível da tela.
const observar = new IntersectionObserver(function(entrada){
    entrada.forEach(function(item){
       // Se o elemento estiver visível, adiciona a classe que ativa a animação.
       if(item.isIntersecting == true){
        item.target.classList.add('visivel')
       } 
    })
})

// Seleciona todos os elementos que devem ser animados e começa a observá-los.
const elementosAnimar = document.querySelectorAll('.animar')

elementosAnimar.forEach(function(elemento){
    observar.observe(elemento)
})