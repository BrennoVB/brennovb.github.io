let sections = document.querySelectorAll('section')
let linksDoMenu = document.querySelectorAll('nav a')

window.addEventListener('scroll', function(){
    for(let i = 0; i < sections.length; i++){
        let topo = sections[i].getBoundingClientRect().top

        if(topo < 200 && topo > -sections[i].offsetHeight){
            for(let i = 0; i < linksDoMenu.length; i++){
                linksDoMenu[i].classList.remove('ativo')
            }

            let linkAtual = document.querySelector('nav a[href="#' + sections[i].id + '"]')

            linkAtual.classList.add('ativo')
        }

    }
})

const observar = new IntersectionObserver(function(entrada){
    entrada.forEach(function(item){
       if(item.isIntersecting == true){
        item.target.classList.add('visivel')
       } 
    })
})

const elementosAnimar = document.querySelectorAll('.animar')

elementosAnimar.forEach(function(elemento){
    observar.observe(elemento)
})