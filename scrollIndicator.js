
export default function scrollIndicator(){
    const indicator = document.querySelector('.indicator');
    const maxHeight = document.body.scrollHeight - window.innerHeight;
    window.addEventListener('scroll', function(){
        const p = (window.scrollY/maxHeight)*100;
        indicator.style.width = `${p}%`;
    })
}