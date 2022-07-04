'use strict';

const select = function() {
  const selectHeader = document.querySelectorAll('.select__by-header');
  const selectItem = document.querySelectorAll('.select__by-body-item');

  selectHeader.forEach(item => {
    item.addEventListener('click', selectToggle);
  });

  selectItem.forEach(item => {
    item.addEventListener('click', selectChoose);
  });

  function selectToggle() {
    this.parentElement.classList.toggle('select__by--isActive');
  }

  function selectChoose() {
    const text = this.innerText;
    const selectBy = this.closest('.select__by');
    const currentText = selectBy.querySelector('.select__by-current');

    currentText.innerText = text;
    selectBy.classList.remove('select__by--isActive');
  }
};

select();

document.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});
