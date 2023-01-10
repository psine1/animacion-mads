
const fr1 = () => {

    let tl_ = gsap.timeline();
        tl_.timeScale( 1 );  
        tl_
        .from(".wrap-smartphone", {duration: 1.2, autoAlpha: 0, ease: "power3.out"}, 0)
        .set(".wrap-nav", {scale: 1.3, autoAlpha: 0, y: 20}, 0)
        .to(".wrap-nav", {duration: 1, autoAlpha: 1, y: 0, ease: "power3.out"}, 0.5)
        .fromTo(".text-input-smartphone", 6, {width: "0px"}, {width: "200px", ease: "power3.out"}, 1)
        .to(".wrap-nav", {duration: 1, scale: 1, rotation: 0.05, transformOrigin: "50% 0%", ease: "power3.out"}, 2.3)
        
        .from(".prod-smartphone-1", {duration: 1, autoAlpha: 0, y: -10, ease: "power3.out"}, 2.8)
        .from(".prod-smartphone-2", {duration: 1, autoAlpha: 0, y: -10, ease: "power3.out"}, 3)
        .from(".prod-smartphone-3", {duration: 1, autoAlpha: 0, y: -10, ease: "power3.out"}, 3.2)

        .to(".shadow-prod", {duration: 1, scale: 1.2, rotation: 0.05, transformOrigin: "50% 30%", ease: "power3.out"}, 3.7)

        .to(".molecule", {duration: 20, rotation: 360, ease: "none"}, 0)
        .to(".molecule", {duration: 2, scale: 1.07, repeat: -1, yoyo: true, ease: "power3.out"}, 0)


           return tl_;
}


 

let multitimeline = gsap.timeline();
//  multitimeline.addPause(15);
    multitimeline
    .add(fr1(), 0)
             

    ;


