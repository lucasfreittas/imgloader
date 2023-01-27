const loading = document.querySelector(".loading-text");
const img = document.querySelector('.bg');

let value = 0

let loader = setInterval(load, 30)

function load(){
    value ++
    let bluriness = (100 - value)
    let opacity = (100-value) / 100

    if(value > 99){
        clearInterval(loader)
    }

    console.log(opacity)

    img.style.filter = `blur(${bluriness}px)`
    loading.innerHTML = `${value}%`
    loading.style.opacity = `${opacity}`;
}

