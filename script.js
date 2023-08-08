// Obter os botões
const buttons = document.getElementsByClassName('portfolio-button');
const buttonsLength = buttons.length;

function filterWorks(e) {
  e.preventDefault();
  filterWorks(e.target.innerHTML);
}

// implementar um listener
for (let i = 0; i < buttonsLength; i += 1) {
  buttons[i].addEventListener('click', filterWorks);
}