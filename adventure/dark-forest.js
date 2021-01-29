import { beginningQuest } from '../data.js';
import {
    findById,
    setUser,
} from '../utils/utils.js';

const USER = 'USER';

export default function beginningQuestFill() {
    const h1 = document.getElementById('quest-title');
    h1.textContent = beginningQuest.title.toUpperCase();
    const p = document.getElementById('quest-desc');
    p.textContent = beginningQuest.description;
    const img = document.getElementById('quest-img');
    img.src = `../assets/quest-imgs/${beginningQuest.image}`;
    const form = document.getElementById('quest-form');

    for (let choice of beginningQuest.choices) {
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
        const choice = findById(beginningQuest.choices, selectionId);

        const user = JSON.parse(localStorage.getItem(USER));

        user.hp += choice.hp;
        user.gold += choice.gold;

        user.completed[beginningQuest.id] = true;

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
        window.location = '../journey/index.html';
    });
}