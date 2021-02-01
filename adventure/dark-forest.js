import { beginningQuest } from '../data.js';
import {
    findById,
    setUser,
    loadUserProfile,
    capitalizeFirstLetter
} from '../utils/utils.js';

loadUserProfile();
const USER = 'USER';

export default function beginningQuestFill() {
    const h1 = document.getElementById('quest-title');
    h1.textContent = capitalizeFirstLetter(beginningQuest.title);
    const p = document.getElementById('quest-desc');
    p.textContent = beginningQuest.description;
    const img = document.getElementById('quest-img');
    img.src = `../assets/quest-imgs/${beginningQuest.image}`;
    const form = document.getElementById('quest-form');

    for (let choice of beginningQuest.choices) {
        const radio = document.createElement('input');
        const label = document.createElement('label');
        // const span = document.createElement('span');
        radio.id = choice.id;
        radio.type = 'radio';
        radio.value = choice.id;
        radio.name = 'choices';

        label.textContent = choice.description;
        label.htmlFor = radio.id;

        form.append(radio, label);
    }

    const submitBtn = document.createElement('button');
    submitBtn.textContent = capitalizeFirstLetter('roll for initiative');
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
        results.style.display = 'flex';
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