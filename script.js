 'use strict';
 function toggleIntro(button) {
  const message = document.getElementById('message');

  if (button.textContent.trim() === '了解更多') {
    message.textContent =
      '欢迎来到 RAHMAT！我们主打云南清真美食，Batu Kawan 新店敬请期待。';
    button.textContent = '收起介绍';
    button.setAttribute('aria-expanded', 'true');

  } else {
    message.textContent =
      '云南清真料理 · Yunnan Muslim Cuisine';
    button.textContent = '了解更多';
    button.setAttribute('aria-expanded', 'false');
  }
}

const introButton = document.getElementById('intro-button');

introButton.addEventListener('click', function () {
  toggleIntro(introButton);
});
  function saveSpice(selectElement) {
    const selectedText =
      selectElement.options[selectElement.selectedIndex].text;

    document.getElementById('spice-result').textContent =
      '你选择的辣度：' + selectedText;

    localStorage.setItem('beefSpice', selectElement.value);
  }
function clearSpice() {
  const spiceSelect = document.getElementById('beef-spice');

  spiceSelect.selectedIndex = 0;

  document.getElementById('spice-result').textContent =
    '尚未选择辣度';

  localStorage.removeItem('beefSpice');
}
function toggleIngredients(button) {
  const ingredients = document.getElementById('beef-ingredients');

 if (ingredients.hidden) {
  ingredients.hidden = false;
  button.textContent = '收起配料';
  button.setAttribute('aria-expanded', 'true');
} else {
  ingredients.hidden = true;
  button.textContent = '查看配料';
  button.setAttribute('aria-expanded', 'false');
}
}
const ingredientsButton =
  document.getElementById('ingredients-button');

ingredientsButton.addEventListener('click', function () {
  toggleIngredients(ingredientsButton);
});
const clearSpiceButton =
  document.getElementById('clear-spice-button');

clearSpiceButton.addEventListener('click', function () {
  clearSpice();
});
const beefSpiceSelect =
  document.getElementById('beef-spice');

beefSpiceSelect.addEventListener('change', function () {
  saveSpice(beefSpiceSelect);
});
  const savedSpice = localStorage.getItem('beefSpice');

  if (savedSpice) {
    const spiceSelect = document.getElementById('beef-spice');
    spiceSelect.value = savedSpice;

    const savedText =
      spiceSelect.options[spiceSelect.selectedIndex].text;

    document.getElementById('spice-result').textContent =
      '你选择的辣度：' + savedText;
  }
  const currentYear =
  document.getElementById('current-year');

currentYear.textContent =
  new Date().getFullYear();
