import { findById, setUser } from '../utils/utils.js';
import { adventures } from '../data.js';

const USER = 'USER'; // magic string
// page-wide elements
const params = new URLSearchParams(window.location.search);
const questId = params.get('id');

const quest = findById(adventures, questId);


// main section elements
const h1 = document.getElementById('quest-title');
h1.textContent = quest.title.toUpperCase();
const p = document.getElementById('quest-desc');
p.textContent = quest.description;
const img = document.getElementById('quest-img');
img.src = `../assets/quest-imgs/${quest.image}`;
const form = document.getElementById('quest-form');

for (let choice of quest.choices) {
    const radio = document.createElement('input');
    const label = document.createElement('label');
    const span = document.createElement('span');

    span.textContent = choice.description;

    radio.type = 'radio';
    radio.value = choice.id;
    radio.name = 'choices';

    label.type = 'submit';
    label.append(span, radio);

    form.append(label);
}

const submitBtn = document.createElement('button');
submitBtn.textContent = '...awkward silence...';
submitBtn.id = 'submit-btn';
form.appendChild(submitBtn);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const selectionId = formData.get('choices');
    const choice = findById(quest.choices, selectionId);

    const user = JSON.parse(localStorage.getItem(USER));

    user.hp += choice.hp;
    user.gold += choice.gold;

    user.completed[questId] = true;

    setUser(user);

    // hide main section
    const main = document.querySelector('.main');
    main.style.display = 'none';

    // display hidden-results section with selection results
    const results = document.querySelector('.results');
    results.style.display = 'block';
    const resultsP = document.getElementById('display-results');
    resultsP.textContent = choice.result;
});

// results section elements
const resultsSect = document.querySelector('.results');
const continueBtn = document.createElement('button');
continueBtn.textContent = 'Continue with story';
continueBtn.id = 'continue-btn';
resultsSect.append(continueBtn);

continueBtn.addEventListener('click', () => {
    window.location = '../quest-log/index.html';
});




