
function startEvents(){
    function scrollIndicator(){
        const indicator = document.querySelector('.indicator');
        const maxHeight = document.body.scrollHeight - window.innerHeight;
        window.addEventListener('scroll', function(){
            const p = (window.scrollY/maxHeight)*100;
            indicator.style.width = `${p}%`;
        })
    }


        
    function scrollSuave(){
        const menu = document.querySelectorAll('.menu-nav ul li a');
        function scrollSection(event){
            event.preventDefault();
            const attr = event.currentTarget.getAttribute('href');
            const section = document.querySelector(attr);
            const top = section.offsetTop;
            window.scrollTo({
                top: top,
                behavior: 'smooth',
            })

        }

        menu.forEach((item)=>{
            item.addEventListener('click', scrollSection);
        })

    }


    function fecharModal(){
        const close = document.querySelector('.modal .fechar');
        
        function closeModal(event){
            const modal = document.querySelector('.modal');
            modal.classList.add('desativar');
        }

        close.addEventListener('click', closeModal);

    }

    fecharModal();
    scrollSuave();
    scrollIndicator();
}


window.addEventListener('load', startEvents);
