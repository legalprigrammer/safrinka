
gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".main",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: () => "+=" + document.querySelector(".main").offsetWidth
  }
});

const tl = gsap.timeline({duration:1})

tl
.from('.logo',{ x: '100%',ease:'power2.in' })
.from('.discover',{ x:'-30%',opacity:'0',ease:'power2.in',delay:'0.05'})
.from('.africa',{ x:'-30%',opacity:'0',ease:'power2.in',delay:'0.05'})
.from('.letter',{ x:'-30%',opacity:'0',ease:'power2.in',delay:'0.05'})
.from('.explore',{ x:'-30%',opacity:'0',ease:'power2.in',delay:'0.05'})
.from('.two',{ x:'-30%',opacity:'0',ease:'power2.in',delay:'0.05'})
.from('.three',{ x:'-30%',opacity:'0',ease:'power2.in',delay:'0.05'})
.from('.ptn',{ x:'-30%',opacity:'0',ease:'power2.in',delay:'0.05'})
.from('.desert',{ x:'-30%',opacity:'0',ease:'power2.in',delay:'0.05'})
.from('.child',{ x:'-30%',opacity:'0',ease:'power2.in',delay:'0.05'})


