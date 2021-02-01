import {
    findById,
    loadUserProfile,
    capitalizeFirstLetter,
    setUser,
    getUser
} from '../utils/utils.js';

import {
    renderQuest,
    form,
    questObject
} from '../journey/quest-utils.js';

loadUserProfile();

const main = document.querySelector('.main');
const results = document.querySelector('.results');
const resultsP = document.getElementById('display-results');
const continueBtn = document.createElement('button');


renderQuest();
const submitBtn = document.createElement('button');
submitBtn.textContent = capitalizeFirstLetter('make an insight check');
submitBtn.id = 'submit-btn';
form.appendChild(submitBtn);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const choiceId = formData.get('choices');
    const questChoices = questObject.choices;
    const choice = findById(questChoices, choiceId);

    const user = getUser();

    if (choice.id === 'slowly-pass') {
        user.hp += choice.hp;
        user.gold = 0;
    } else {
        user.hp += choice.hp;
        user.gold += choice.gold;
    }

    user.completed[questObject.id] = true;

    setUser(user);

    main.style.display = 'none';
    results.style.display = 'flex';

    if (choice.hp <= 0) {
        resultsP.textContent = `Welp, you weren't very insightful today. ` + choice.result;
    } else {
        resultsP.textContent = choice.result;
    }

    continueBtn.textContent = 'Continue with story';
    continueBtn.id = 'continue-btn';
    results.append(continueBtn);

    continueBtn.addEventListener('click', () => {
        window.location = '../journey/index.html';

    });
});
