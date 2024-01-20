// animation for landing page
gsap.from(
    "h1",
    {
        y: -30,
        duration: 1,
        opacity: 0,
    }
)
gsap.from(
    "p",
    {
        x: -50,
        duration: 2,
        opacity: 0,
        delay: 1,
    }
)
gsap.from(
    "img",
   { 
        x: -60,
        opacity: 0,
        duration: 2,
        delay: 1.5,
   }
    )
gsap.from(
    ".start-btn",
    {
        y: 20,
        opacity: 0,
        duration: 2,
        delay: 3,
    }
)
gsap.to(
    ".hourglass",
    {   delay: 1,
        duration:2,
        scale : 1.1,
        repeat: -1,
        yoyo: true,
    }
)
gsap.to(
    ".blob-1",
    {
        opacity:1,
        duration:3,
    }
)
// blob and hourglass animation
const tween= KUTE.fromTo(
    '#blob1',
    {path: '#blob1'},
    {path: '#blob2'},
    {repeat: 999, duration:3000, yoyo:true}
)
tween.start()
