// animation
gsap.from(
    "h1",
    {
        y: -60,
        duration: 1,
        opacity: 0,
        

    }
)
gsap.from(
    ".label",
    {
        x: -60,
        duration: .5,
        opacity: 0,
        stagger: .2,
        delay: 1.5,

    }
)
gsap.from(
    "#container",
    {
        x: -60,
        duration: .5,
        opacity: 0,
        delay: 1,
        

    }
)
gsap.from(
    ".timer",
    {
        x: -60,
        duration: .7,
        opacity: 0,
        stagger: .2,
        delay : 2,
    }
)
gsap.from(
    ".sbtn",
    {
        x: -60,
        duration: .7,
        opacity: 0,
        stagger: .1,
        delay : 2,
    }
)
gsap.from(
    "#start",
    {
        y: 30,
        opacity: 0,
        duration: .4,
        delay: 2.7,
    }
)






// working
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var wm = document.getElementById('w_minutes');
var ws = document.getElementById('w_seconds');

var bm = document.getElementById('b_minutes');
var bs = document.getElementById('b_seconds');
var btns = document.getElementsByClassName("sbtn");
var cm = document.getElementById('counter');

var startTimer;

start.addEventListener('click', function(){
    reset.classList.add("show");
    stop.classList.add("show");
    start.classList.add("hide");
    start.classList.remove("show");
    Array.from(btns).forEach(function(btn) {
        btn.classList.add("hide");
      });
    gsap.from(
        ".show",
        {
            x: 30,
            opacity: 0,
            duration: .4,
            stagger: .1,
        }
    )
    
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } else {
        alert("Timer is already running");
    }
})

reset.addEventListener('click', function(){
    wm.innerText = 25;
    ws.innerText = "00";

    bm.innerText = 5;
    bs.innerText = "00";
    Array.from(btns).forEach(function(btn) {
        btn.classList.remove("hide");
      });
    gsap.from(
        "#start",
        {
            x: -30,
            opacity: 0,
            duration: .4,
        }
    )
    document.getElementById('counter').innerText = 4;
    stopInterval()
    startTimer = undefined;
})

stop.addEventListener('click', function(){
    stopInterval();
    gsap.from(
        "#start",
        {
            x: -30,
            opacity: 0,
            duration: .4,
        }
    )
    startTimer = undefined;
})


//Start Timer Function
function timer(){
    //Work Timer Countdown
    if(ws.innerText != 0){
        ws.innerText--;
    } else if(wm.innerText != 0 && ws.innerText == 0){
        ws.innerText = 59;
        wm.innerText--;
    }

    //Break Timer Countdown
    if(wm.innerText == 0 && ws.innerText == 0){
        if(bs.innerText != 0){
            bs.innerText--;
        } else if(bm.innerText != 0 && bs.innerText == 0){
            bs.innerText = 59;
            bm.innerText--;
        }
    }

    //decrease Counter by one if one full cycle is completed
    if(wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
        if(cm.innerText=1){
            wm.innerText = 25;
            ws.innerText = "00";
        
            bm.innerText = 5;
            bs.innerText = "00";
            Array.from(btns).forEach(function(btn) {
                btn.classList.remove("hide");
              });
            gsap.from(
                "#start",
                {
                    x: -30,
                    opacity: 0,
                    duration: .4,
                }
            )
            cm.innerText = 4;
            stopInterval()
            startTimer = undefined;
            alert("Hurray! Your Sessions are completed!")
            return;
        }
        else{wm.innerText = 25;
        ws.innerText = "00";

        bm.innerText = 5;
        bs.innerText = "00";

        document.getElementById('counter').innerText--;
        }
    }
}

//Stop Timer Function
function stopInterval(){
    clearInterval(startTimer);
    start.classList.remove("hide");
    stop.classList.remove("show");
    reset.classList.remove("show");
}



//setting-time and sessions

var wma = document.getElementById('add-btn-wm');
var wms = document.getElementById('sub-btn-wm');
var cma = document.getElementById('add-btn-cn');
var cms = document.getElementById('sub-btn-cn');
var bma = document.getElementById('add-btn-bm');
var bms = document.getElementById('sub-btn-bm');
var cm = document.getElementById('counter');

wma.addEventListener('click',function() {
    wm.innerText++;
})
wms.addEventListener('click',function() {
    if(wm.innerText<=25){
        alert("A session cannot be shorter than 25 Minutes !")
        return;
    }
    else wm.innerText--;
})
cma.addEventListener('click',function() {
    cm.innerText++;
})
cms.addEventListener('click',function() {
    if(cm.innerText<=1){
        return;
    }
    else cm.innerText--;
})
bma.addEventListener('click',function() {
    bm.innerText++;
})
bms.addEventListener('click',function() {
    if(bm.innerText<=5){
        return;
    }
    else bm.innerText--;
})
