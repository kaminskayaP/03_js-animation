(function() {
    document.addEventListener('DOMContentLoaded', () => {
        const tlCircle = gsap.timeline({paused: true});
        const tlBT1 = gsap.timeline({paused: true});
        const tlBB1 = gsap.timeline({paused: true});
        const tlBB2 = gsap.timeline({paused: true});
        const tlBB3 = gsap.timeline({paused: true});
        const tlBB4 = gsap.timeline({paused: true});


        tlCircle.fromTo('.hero__circle', {x: -200, y: 100} ,{x: 0, y: 0, duration: 1})
                .to('.hero__circle', {scale: .65, duration: .20})
                .to('.hero__circle', {scale: 1, duration: .20})
                .to('.hero__circle', {opacity: 0, duration: 0})

        tlBT1.to('.burger-top', { y: 0, opacity: 1, duration: 2, delay: 1.4})

        tlBB1.fromTo('.burger-bot', {y: 80}, {y: 0, duration: 1, opacity: 1, delay: 1.90})
        tlBB4.fromTo('.burger-bot', {opacity: 0}, { opacity: 1, duration: 2, delay: 1.90})
        tlBB2.fromTo('.burger-bot__item-menu', {y: 30, opacity: 0} ,{y: 0, opacity: 1, duration: 1, delay: 3.5})
        tlBB3.fromTo(['.burger-bot__list-social', '.burger-bot__right'], {y: 80, opacity: 0} ,{y: 0, opacity: 1, duration: 1, delay: 4.5})


       let open =  document.querySelector('.hero___burger-img');
       let close =  document.querySelector('.burger-top__btn');

       open.addEventListener('click', () => {
            document.querySelector('.hero__circle').classList.add('d-block')
            tlCircle.play();
            document.querySelector('.burger').classList.add('d-block')
            tlBT1.play();
            tlBB1.play();
            tlBB2.play();
            tlBB3.play();
            console.log('1');
            
       })

       close.addEventListener('click', () => {
            tlBT1.reverse();
            tlBB1.reverse();
            tlBB2.reverse();
            tlBB3.reverse();
            document.querySelector('.burger').classList.remove('d-block')
        })
         
      
        
    })
}())