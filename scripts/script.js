const bigFoto = document.querySelector('.slider>.slider__foto>img');
const smallFoto = document.getElementsByClassName('slider_thumbnail');

for (let foto of smallFoto) {
  foto.addEventListener('click', changeFoto);
}

function changeFoto(){
  let bigPhoto = bigFoto.src;
  bigFoto.src = this.src;
  this.src = bigPhoto;
}
