// scroll animation
const sr = ScrollReveal({
    origin: "bottom",
    distance: "60px",
    duration: 3000,
    delay: 200,
    // reset:true,  // reset animation
  });
  // hero
  sr.reveal(".hero__text", { origin: "left" });
  sr.reveal(".hero__img" ,  { origin: "right" });
  sr.reveal(".team__text" ,  { origin: "top" });
  sr.reveal(".team__img" ,  { origin: "bottom" });
  sr.reveal("#services" ,  { origin: "top" });
  sr.reveal("#clients" ,  { origin: "left" });
  sr.reveal("#contact" ,  { origin: "bottom" });
  sr.reveal("#contact_head" ,  { origin: "top" });
