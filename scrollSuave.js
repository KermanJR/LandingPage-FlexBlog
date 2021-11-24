
    
export default function scrollSuave(){
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