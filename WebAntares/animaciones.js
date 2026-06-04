document.addEventListener("DOMContentLoaded", function () {
 
  const articulos = document.querySelectorAll(".bloques article");
 
  if (articulos.length >= 3) {
    articulos[0].classList.add("anim-izquierda");
    articulos[1].classList.add("anim-zoom");
    articulos[2].classList.add("anim-derecha");
  }
 
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {

          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.2 }
  );
 
  articulos.forEach(function (articulo) {
    observer.observe(articulo);
  });
 
});