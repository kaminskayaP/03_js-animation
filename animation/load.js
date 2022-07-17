(function() {
    document.addEventListener('DOMContentLoaded', () => {
        const tl = gsap.timeline();
        const portfolioTl = gsap.timeline();
        const portfolioTl2 = gsap.timeline();
        const portfolioTl3 = gsap.timeline();
        const portfolioTl4 = gsap.timeline();

        tl.fromTo('.hero__bot-left', {opacity: 0, y: 500}, {opacity: .6, y: 0, duration: 1})
        tl.fromTo('.hero-descr', {opacity: 0}, {opacity: .6, duration: 1}) 
        tl.to(['.hero-descr', '.hero__bot-left'], {opacity: 1, duration: .5}) 
        
        portfolioTl.fromTo('#img-1', {opacity: 0}, {opacity: 1, duration: 1, delay: 1.25})
        portfolioTl2.fromTo('#img-2', {opacity: 0}, {opacity: 1, duration: 1, delay: 1.75})
        portfolioTl3.fromTo('#img-3', {opacity: 0}, {opacity: 1, duration: 1, delay: 2.25})
        portfolioTl4.fromTo('.hero__auth', {opacity: 0}, {opacity: 1, duration: 1, delay: 2.5})
        
    })
}())