function type(selector, text, delay, acceleration = 1, i = 0) {
  const element = document.querySelector(selector);
  if (i < text.length) {
    element.innerHTML += text[i];
    i++;
    setTimeout(type, delay, selector, text, delay, acceleration, i);
  }
}

type("#name", "Hayk Sahakyan", 300, 1.5);
