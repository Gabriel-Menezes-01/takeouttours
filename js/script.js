const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

// slider

let imgSlider = document.querySelectorAll('.slide-box');
let btnProximo = document.querySelector('#proxima');
let btnAnterior = document.querySelector('#anterior');
let btnNav = document.querySelectorAll('.btn-nav')

let contadorImg = imgSlider.length;
let imgAtiva = 0;

btnProximo.addEventListener('click',  ()=>{
   imgAtiva++;
   if (imgAtiva >= contadorImg) {
      imgAtiva = 0;
   }
   mostraslider();
})

btnAnterior.addEventListener('click', ()=>{
   imgAtiva--;
   if (imgAtiva < 0) {
      imgAtiva = contadorImg - 1;
   }
   mostraslider();
})

function mostraslider() {
   let imgAntiga = document.querySelector('.slide-conteiner .slide-box.ativo');
   let btnAntiga = document.querySelector('.btn-nav-box .btn-nav.ativo');

   imgAntiga.classList.remove('ativo');
   btnAntiga.classList.remove('ativo');

   imgSlider[imgAtiva].classList.add('ativo')
   btnNav[imgAtiva].classList.add('ativo')
}

btnNav.forEach((btn, indice)=>{
   btn.addEventListener('click', ()=>{
      imgAtiva = indice;
      mostraslider();
   })
});
// passa a cada 8s
setInterval(() => {
   imgAtiva++;
   if (imgAtiva >= contadorImg) {
      imgAtiva = 0;
   }
   mostraslider();
}, 8000); 