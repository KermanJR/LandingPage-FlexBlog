



export default function fecharModal(){
    const close = document.querySelector('.modal .fechar');
    
    function closeModal(event){
        const modal = document.querySelector('.modal');
        modal.classList.add('desativar');
    }

    close.addEventListener('click', closeModal);

}
