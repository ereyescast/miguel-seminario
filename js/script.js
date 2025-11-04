document.addEventListener("DOMContentLoaded", () => {
  // 🏙️ Lista de distritos
  const distritos = [
    "Ate","Barranco","Breña","Carabayllo","Chaclacayo","Chorrillos","Cieneguilla",
    "Comas","El Agustino","Independencia","Jesús María","La Molina","La Victoria",
    "Lima (Centro)","Lince","Los Olivos","Lurigancho (Chosica)","Lurín","Magdalena del Mar",
    "Miraflores","Pachacámac","Pucusana","Pueblo Libre","Puente Piedra","Punta Hermosa",
    "Punta Negra","Rímac","San Bartolo","San Borja","San Isidro","San Juan de Lurigancho",
    "San Juan de Miraflores","San Luis","San Martín de Porres","San Miguel","Santa Anita",
    "Santa María del Mar","Santa Rosa","Santiago de Surco","Surquillo","Villa El Salvador",
    "Villa María del Triunfo","Bellavista (Callao)","Carmen de la Legua","La Perla","Ventanilla","Mi Perú"
  ];

  const selectDistrito = document.getElementById("distrito");
  distritos.forEach(d => {
    const opt = document.createElement("option");
    opt.value = d;
    opt.textContent = d;
    selectDistrito.appendChild(opt);
  });

  // 🍞 Toast
  const toast = document.getElementById("toast");

  function showToast() {
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3000);
  }

  // 📩 Envío de formulario a WhatsApp
  document.getElementById("leadForm").addEventListener("submit", e => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const distrito = document.getElementById("distrito").value;
    const objetivo = document.getElementById("objetivo").value.trim();

    if (!nombre || !distrito || !objetivo) return;

    showToast();

    const mensaje = `Hola Miguel, soy ${nombre}. Vivo en ${distrito} y quiero mejorar mi ${objetivo}.`;
    const url = `https://wa.me/51993925765?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
    
  });

  // 🎬 Animación de aparición para imágenes y tarjetas de servicios
  const elementosAnimados = document.querySelectorAll("#servicios img, .servicio-card");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  elementosAnimados.forEach(el => observer.observe(el));
});

// Cambia cada 4 segundos en lugar de 5
const myCarousel = document.querySelector('#carouselSobreMi');
if (myCarousel) {
  const carousel = new bootstrap.Carousel(myCarousel, {
    interval: 4000,
    ride: 'carousel'
  });
}
