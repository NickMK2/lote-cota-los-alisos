const CONTACT = {
  name: "Nicolás Segura",
  phone: "573028327122",
  email: "nicolasseguraherrera96@gmail.com",
};

const defaultMessage = `Hola Nicolás, estoy interesado en el lote en Cota, Conjunto Residencial Los Alisos. Quisiera recibir más información y agendar una visita.`;

const createWhatsappUrl = (message) => {
  return `https://wa.me/${CONTACT.phone}?text=${encodeURIComponent(message)}`;
};

const whatsappFloat = document.querySelector("#whatsappFloat");
const heroWhatsapp = document.querySelector("#heroWhatsapp");
const contactForm = document.querySelector("#contactForm");
const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (whatsappFloat) {
  whatsappFloat.href = createWhatsappUrl(defaultMessage);
}

if (heroWhatsapp) {
  heroWhatsapp.addEventListener("click", (event) => {
    event.preventDefault();
    window.open(createWhatsappUrl(defaultMessage), "_blank", "noopener,noreferrer");
  });
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  const button = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  if (!button || !answer) return;

  button.addEventListener("click", () => {
    const isOpen = item.classList.toggle("is-open");
    answer.style.maxHeight = isOpen ? `${answer.scrollHeight}px` : "0px";
  });
});

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const nombre = formData.get("nombre")?.toString().trim();
    const telefono = formData.get("telefono")?.toString().trim();
    const correo = formData.get("correo")?.toString().trim();
    const interes = formData.get("interes")?.toString().trim();
    const mensaje = formData.get("mensaje")?.toString().trim();

    const whatsappMessage = [
      "Hola Nicolás, quiero conocer el lote en Cota - Conjunto Residencial Los Alisos.",
      "",
      `Nombre: ${nombre || "No indicado"}`,
      `Teléfono: ${telefono || "No indicado"}`,
      `Correo: ${correo || "No indicado"}`,
      `Tipo de interés: ${interes || "No indicado"}`,
      `Mensaje: ${mensaje || "Quisiera recibir más información y agendar una visita."}`,
    ].join("\n");

    window.open(createWhatsappUrl(whatsappMessage), "_blank", "noopener,noreferrer");
  });
}
