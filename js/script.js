const inputValue = document.getElementById('inputValue');
const submitButton = document.getElementById('submitButton');
const iconContainer = document.getElementById('icon-container');
const totalIcons = document.getElementById('total-icons');

let iconArray = [];

function renderIcons() {
    iconContainer.innerHTML = "";
    for (let i = 0; i < iconArray.length; i++) {
        iconContainer.innerHTML += `<i class="bi bi-${iconArray[i]}"></i>`;
    }
    totalIcons.innerHTML = `Total icons: ${iconArray.length}`;
}

submitButton.addEventListener('click', () => {
    iconArray.push(inputValue.value);
    renderIcons();
});
