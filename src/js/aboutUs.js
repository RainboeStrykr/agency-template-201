function animateCountUp(element, start, end, duration) {
  const range = end - start;
  let startTime = null;

  console.log("test");

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const value = Math.floor(progress * range + start);
    element.textContent = value.toLocaleString() + "+";
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

const counterElement1 = document.getElementById("counter1");
const counterElement2 = document.getElementById("counter2");

let hasAnimated = false; // Agar animasi hanya berjalan sekali

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !hasAnimated) {
      animateCountUp(counterElement1, 0, 1000, 1500);
      animateCountUp(counterElement2, 0, 130, 1000);
      hasAnimated = true;
      observer.unobserve(counterElement2);
    }
  });
});

observer.observe(counterElement1);
