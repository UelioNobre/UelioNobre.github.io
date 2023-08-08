// Obter os botões
const buttons = document.getElementsByClassName('portfolio-button');

function filterWorks(work) {
  console.log(work);
}

function filterWorks(e) {
  e.preventDefault();
  filterWorks(e.target.innerHTML);
  // filterWorks(e.target.innerHTML);
}

// implementar um listener
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', filterWorks);
}