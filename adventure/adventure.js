import {
    findById,
    setUser,
} from '../utils/utils.js';
import {
    beginningQuest,
    mainQuest,
} from '../data.js';
import beginningQuestFill from './dark-forest.js';

const USER = 'USER';
const params = new URLSearchParams(window.location.search);
const questId = params.get('id');
const quest = findById(mainQuest, questId);

// start on beginning quest Dark Forest //
if (questId === beginningQuest.id) {
    beginningQuestFill();
} else {
    // main quest Journey Home //
    const h1 = document.getElementById('quest-title');
    h1.textContent = quest.title.toUpperCase();
    const p = document.getElementById('quest-desc');
    p.textContent = quest.description;
    const img = document.getElementById('quest-img');
    img.src = `../assets/quest-imgs/${quest.image}`;
    const form = document.getElementById('quest-form');

    for (let encounter of quest.encounters) {
        const radio = document.createElement('input');
        const label = document.createElement('label');
        const span = document.createElement('span');

        span.textContent = encounter.description;

        radio.type = 'radio';
        radio.value = encounter.id;
        radio.name = 'encounters';

        label.append(span, radio);

        form.append(label);
    }

    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'MAKE AN INSIGHT CHECK';
    submitBtn.id = 'submit-btn';
    form.appendChild(submitBtn);

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        const selectionId = formData.get('encounters');
        const encounter = findById(quest.encounters, selectionId);

        const user = JSON.parse(localStorage.getItem(USER));

        if (encounter.id === 'slowly-pass') {
            user.hp += encounter.hp;
            user.gold = 0;
        } else {
            user.hp += encounter.hp;
            user.gold += encounter.gold;
        }

        user.completed[quest.id] = true;

        setUser(user);

        // hide main section
        const main = document.querySelector('.main');
        main.style.display = 'none';

        // display hidden-results section with selection results
        const results = document.querySelector('.results');
        results.style.display = 'block';
        const resultsP = document.getElementById('display-results');
        if (encounter.hp <= 0) {
            resultsP.textContent = `Welp, you weren't very insightful today. ` + encounter.result;
        } else {
            resultsP.textContent = encounter.result;
        }
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



