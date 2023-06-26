




window.addEventListener("DOMContentLoaded", () => {
    ScrollReveal({
      reset: true,
      distance: "80px",
      duration: 1000,
      delay: 20,
      easing: "ease-in-out",
    });
    ScrollReveal().reveal(".mifoto", {
      origin: "left",
    });
    ScrollReveal().reveal(".btn", {
      origin: "right",
    });
    ScrollReveal().reveal(".hola", {
      origin: "top",
    });
    ScrollReveal().reveal(".miDescripcion ", {
      origin: "bottom",
    });
    ScrollReveal().reveal(" .hablemos", {
        origin: "top",
      });
      ScrollReveal().reveal(" .formulario", {
        origin: "bottom",
      });
 
     setTimeout(() => {
       intro.style.top = "-100vh";
     }, 2300);
 });

  const moon = document.querySelector('.moon');
 
  moon.addEventListener('click', () => {
    // document.querySelector('.contact').style.color="#8b8a8a";
    // document.querySelector('.active').style.color="#8b8a8a";
    document.querySelector('.bx').style.color="#8b8a8a";
    document.querySelector('.bxl-github').style.color="#8b8a8a";
    // document.querySelector('.active').style.color="#8b8a8a";
   
  document.body.classList.toggle('darkmode');
  if(document.body.classList.contains('darkmode')){
    moon.src='./imagenes/sun.png';
    document.querySelector('.contact').style.color="white";
    document.querySelector('.active').style.color="white";
    document.querySelector('.bx').style.color="white";
    document.querySelector('.bxl-github').style.color="white";
    
  }else{
    moon.src='./imagenes/moon.png';
   }
});


_toggle.onclick = () =>{
  _items.classList.toggle("open")
  _toggle.classList.toggle("close")
}

 
 
