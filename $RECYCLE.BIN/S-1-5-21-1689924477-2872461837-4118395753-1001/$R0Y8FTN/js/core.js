const allques = document.querySelectorAll('.question');
const allAns = document.querySelectorAll('.answer');

for (let i = 0; i < allques.length; i++) {
  allques[i].addEventListener('click', () => {
    const isOpen = allAns[i].classList.contains('active');

    for (let j = 0; j < allAns.length; j++) {
      allAns[j].classList.remove('active');
      const arrow = allques[j].querySelector('.arrow');
      arrow?.querySelector('.fa-angle-up')?.style.setProperty('display', 'none');
      arrow?.querySelector('.fa-angle-down')?.style.setProperty('display', 'inline-block');
    }

    if (!isOpen) {
      allAns[i].classList.add('active');
      const arrow = allques[i].querySelector('.arrow');
      arrow?.querySelector('.fa-angle-up')?.style.setProperty('display', 'inline-block');
      arrow?.querySelector('.fa-angle-down')?.style.setProperty('display', 'none');
    }
  });
}
