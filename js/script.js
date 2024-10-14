 const title = document.querySelector(`.title`);

const text = title.innerHTML
title.innerHTML = ``

function rec(i=0) {
    title.innerHTML += text[i]
    i++
    if (i<text.length) {
        setTimeout(() => {
            rec(i)
        }, 100);
    }
}
rec()

const boat = document.querySelector(`.boat`),
  clouds = document.querySelectorAll(`cloud`)

window.addEventListener(`scroll`, () => {
  
    boat.style.transform =`translateX(${scrollY}px)`;
    clouds.forEach(cloud=>{
        const speed= cloud.getAttribute(`speed`)
        cloud.style.transform = `translateX(${scrollY*speed}px)`;
    })
})

const img = document.querySelector(`.img`),
  div = document.querySelector(`.div`);
  
  div.addEventListener(`mousemove`, (e) => {
   img.style.transform = `translate(${-e.pageX/20}px,${-e.pageY/10}px)`
  })


  const timers = document.querySelectorAll(`.timer`),
  item = document.querySelector(`.item`);
  
  window.addEventListener(`scroll`,function scrollFunc(){
        if (scrollY+700>item.offsetTop) {
        timers.forEach(timer => {
            function rec() {
                let count = +timer.getAttribute(`count`)
                timer.innerHTML++
                if (timer.innerHTML < count) {
                    setTimeout(() => {
                        rec()
                    }, 5)
                }
            }
            rec()
          })
          window.removeEventListener(`scroll`, scrollFunc)
        }
  })
 
  const btns = document.querySelectorAll('.btn');
  
   btns.forEach(btn=>{
    window.addEventListener(`mousemove`,(e)=>{
        let y = e.pageY - btn.offsetTop
        let x = e.pageX - btn.offsetLeft
        btn.style.setProperty(`--x`,`${x}px`)
        btn.style.setProperty(`--y`,`${y}px`)
    })
   }) 
  
  
  




