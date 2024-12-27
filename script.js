document.addEventListener('DOMContentLoaded', () => {
    const numbers = document.querySelectorAll('.number');
    
    numbers.forEach(number => {
        number.innerText = '0';
        const updateCount = () => {
            const target = +number.getAttribute('data-target');
            const count = +number.innerText;
            const increment = target / 200;  // Ajustez la valeur pour augmenter la vitesse
            
            if(count < target) {
                number.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 80);  // Ajustez le délai pour augmenter la vitesse
            } else {
                number.innerText = target;
            }
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCount();
                    observer.unobserve(number);  // Arrête d'observer une fois que le comptage a commencé
                }
            });
        }, { threshold: 1.0 });
        
        observer.observe(number);
    });
});
//nav menu
const navMenu =document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}
//remove menu mobile
const navLink = document.querySelectorAll('.nav__link')



navLink.forEach(n=>n.addEventListener('click', () =>{
    const navMenu =document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
})
)


