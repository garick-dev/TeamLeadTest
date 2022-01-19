document.addEventListener("DOMContentLoaded", (ev) => {

    let minutesEl = document.querySelector("#minutes");
    let secondsEl = document.querySelector("#seconds");

    let min =  29;
    const  updateTime = () => {
        let time = new Date();

            let sec = 59 - time.getSeconds();
            if (sec=== 59) {
                if (min >= 1) {
                    min--;
                }
                else {
                    sec = 0;
                    stopTimer();
                }
            }
            if(sec < 10) {
                sec = "0" + sec;
            }

            if (min >= 10) {
                minutesEl.innerHTML = min;
            }
            else {
                minutesEl.innerHTML = "0" + min;
            }

            secondsEl.innerHTML = sec;


    }

    let timer = null;
   const startTimer = () => {
      timer = setInterval(updateTime,1000);
   }
   startTimer();
   const stopTimer = () => {
       clearInterval(timer);
   }

    const glide= new Glide('.glide', {
        type: 'carousel',
        animationDuration: 500,
        perView: 3,
        startAt: 0,
        rewind: false,
        keyboard: false,
        gap: 30,
        breakpoints: {
            1280: {
                perView: 2
            },

            500: {
                perView: 1
            }
        }
    })
    glide.mount();

});

