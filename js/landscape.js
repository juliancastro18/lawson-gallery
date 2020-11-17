const elem = document.querySelector('#content');
const body = document.querySelector('body');
const btnImg = document.querySelector('#btn-img');

document.onreadystatechange = hideLoading;
body.addEventListener("mousemove", parallax);
btnImg.addEventListener("click", imgResize);

function parallax(e) {
    let w = window.innerWidth / 2;
    let mouseX = e.clientX;
    // le agregué +10 para que se vea mas interesante al redimensionar
    let depth1 = `${50-(mouseX-w)*0.005+10}% ${50}%`;
    let depth2 = `${50-(mouseX-w)*0.01+10}% ${50}%`;
    let depth3 = `${50-(mouseX-w)*0.02+10}% ${50}%`;
    let depth4 = `${50-(mouseX-w)*0.04+10}% ${50}%`;
    let x = `${depth4},${depth3},${depth2},${depth1}`;
    // console.log(x);
    elem.style.backgroundPosition = x;
}

function imgResize(e) {
    elem.classList.toggle('fit');

    if(elem.classList.contains('fit')){
        btnImg.textContent = "Crop to fit";
    } else {
        btnImg.textContent = "Show full painting";
    }
}

function hideLoading() {
    const state = document.readyState;
    if (state == 'complete') {
            document.querySelector('.loading').style.display="none";
    }
}