const words = ["향상하는", "열정적인", "배가고픈", "도전적인", "창의적인", "헌신적인", "ISFP"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typedSpan = document.getElementById("typed-word");

  function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      typedSpan.textContent = currentWord.substring(0, charIndex--);
    } else {
      typedSpan.textContent = currentWord.substring(0, charIndex++);
    }

    let typingSpeed = isDeleting ? 80 : 130;
    if (!isDeleting && charIndex > currentWord.length) {
      isDeleting = true;
      typingSpeed = 1000; 
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 500;
    }

    setTimeout(typeEffect, typingSpeed);
  }

  document.addEventListener("DOMContentLoaded", typeEffect);

  const container = document.querySelector('.container');
const boxes = document.querySelectorAll('.start-box, .mid-box, .last-box');

const options = {
    root: container,
    threshold: 0.5 // 섹션이 50% 이상 보일 때 색상 변경
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // HTML에 설정한 data-color 값을 가져옴
            const bgColor = entry.target.getAttribute('data-color');
            if (bgColor) {
                container.style.backgroundColor = bgColor;
            }
        }
    });
}, options);

boxes.forEach(box => observer.observe(box));