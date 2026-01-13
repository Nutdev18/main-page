function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 120;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

console.log("เว็บไซด์นี้จัดทำขึ้นเพื่อส่งงานอาจารย์เท่านั้น ไม่ได้มีเจตนาเพื่อการค้าใดๆ ทั้งสิ้น");
console.log("ขออนุญติใช้งานรูปภาพจาก Google เพื่อการศึกษา");