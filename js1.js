
const shirtCards = document.querySelectorAll('.shirt');

shirtCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
    card.style.transform = 'scale(1.07)';
  });

  card.addEventListener('mouseout', () => {
    card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    card.style.transform = 'scale(1)';
  });
});

const bannerImages = document.querySelectorAll('.image-container img');

bannerImages.forEach(image => {
  image.addEventListener('mouseenter', () => {
    image.style.border = '3px solid #2874f0';
    image.style.transform = 'scale(1.05)';
  });

  image.addEventListener('mouseout', () => {
    image.style.border = 'none';
    image.style.transform = 'scale(1)';
  });
});
 
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.color = '#2874f0';
    link.style.textDecoration = 'underline';
  });

  link.addEventListener('mouseout', () => {
    link.style.color = '#2c2c2c';
    link.style.textDecoration = 'none';
  });
});
const shirts = document.querySelectorAll(".shirt");

shirts.forEach(shirt => {

  shirt.addEventListener("mouseenter", () => {
    shirt.style.transform = "scale(1.05)";
    shirt.style.transition = "transform 0.3s ease";
    shirt.style.boxShadow = "0 4px 10px red";
  });


  shirt.addEventListener("mouseleave", () => {
    shirt.style.transform = "scale(1)";
    shirt.style.boxShadow = "none";
  });
});
