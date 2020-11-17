const wrapper = document.querySelector('#wrapper');
const frame = document.querySelector('#frame');
const content = document.querySelector('#content');
const btnImg = document.querySelector('#btn-next');

const title = document.querySelector('#title');
const measures = document.querySelector('#measures');
const description = document.querySelector('#description');


const imagenes = 
    [
        {url:'img/0_485f6f.png', title: 'Sheep', size: 10, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
        {url:'img/1_545655.png', title: 'House #1', size: 14, desc: 'Ex ratione dolorem, error facilis perferendis fuga rerum molestiae et ullam.'},
        {url:'img/2_506175.png', title: 'House #2', size: 18, desc: 'Nesciunt illum rerum minima quisquam nam tempora excepturi iste suscipit.'},
        {url:'img/3_747879.png', title: 'House #3', size: 12, desc: 'Fugit sapiente pariatur eum esse temporibus inventore. At odio architecto numquam.'},
        {url:'img/4_585d63.png', title: 'Ship', size: 15, desc: 'Voluptas tempore commodi modi, atque assumenda nemo. Blanditiis eaque suscipit ad.'}
    ];


const changePic = e => {
    // Si hay elementos transicionando (mas de una imagen en el contenedor), ignoro el click
    if(content.querySelectorAll('img').length>1) return;

    // Obtengo la imagen activa y su ID
    const activeImg = content.querySelector('.active');
    const activeFilename = activeImg.src.replace(/^.*[\\\/]/, '');
    const activeId = parseInt(activeFilename.split("_")[0], 10);
 
    // La paso de activa a inactiva, y la elimino    
    activeImg.classList.replace('active', 'inactive');
    setTimeout( ()=> {
        content.querySelector('.inactive').remove();
    }, 800 );

    // Creo la nueva img
    const newId = activeId>=imagenes.length-1 ? 0 : activeId+1;
    content.innerHTML += `<img src="${imagenes[newId].url}" class="active">`;

    // Cambio el fondo
    const newHex = "#" + imagenes[newId].url.split("_")[1].split(".")[0];
    content.style.backgroundColor = newHex;

    // Cambio la descripcion
    title.textContent = imagenes[newId].title;
    measures.textContent = `${imagenes[newId].size}cm x ${imagenes[newId].size}cm`
    description.textContent = imagenes[newId].desc;

};

const iniciarGaleria = () => {
    content.innerHTML += `<img src="${imagenes[0].url}" class="active">`;
    content.style.backgroundColor = "#" + imagenes[0].url.split("_")[1].split(".")[0];
    title.textContent = imagenes[0].title;
    measures.textContent = `${imagenes[0].size}cm x ${imagenes[0].size}cm`
    description.textContent = imagenes[0].desc;
}

const hideLoading = () => {
    const state = document.readyState;
    if (state == 'complete') {
            document.querySelector('.loading').style.display="none";
    }
}

document.onreadystatechange = hideLoading;
iniciarGaleria();
btnImg.addEventListener('click', changePic);