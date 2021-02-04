import {
    getUser,
    findById,
} from '../utils/utils.js';
import { questData } from '../data.js';

const journeySection = document.querySelector('.log');
const user = getUser();

const params = new URLSearchParams(window.location.search);
const questId = params.get('id');
export const questObject = findById(questData, questId);
// main quest Journey Home //
const h1 = document.getElementById('quest-title');
const p = document.getElementById('quest-desc');
const img = document.getElementById('quest-img');
export const form = document.getElementById('quest-form');

export function renderQuest() {
    h1.textContent = questObject.title;
    p.textContent = questObject.description;
    img.src = '../assets/quest-imgs/' + questObject.image;
    renderQuestChoices();
}

export function renderQuestChoices() {
    for (let choice of questObject.choices) {
        const radio = document.createElement('input');
        const label = document.createElement('label');

        radio.id = choice.id;
        radio.type = 'radio';
        radio.value = choice.id;
        radio.name = 'choices';

        label.textContent = choice.description;
        label.htmlFor = radio.id;

        form.append(radio, label);
    }
}

export function checkIfComplete() {
    let masterAdventurer = true;

    for (let quest of questData) {
        if (!user.completed[quest.id]) {
            masterAdventurer = false;
        }
    }

    if (user.hp < 1 || masterAdventurer) {
        window.location = '../results/index.html';
    }
}

export function renderLogEntry() {
    for (let quest of questData) {
        const a = document.createElement('a');

        a.textContent = quest.title;
        a.id = quest.id;
        a.href = `../adventure/?id=${quest.id}`;
        if (user.completed[quest.id]) {
            a.style.textDecoration = 'line-through';
            a.style.color = 'red';
            a.style.cursor = 'inherit';
            a.style.fontSize = '0.8rem';
            a.href = '#';
            a.style.transform = 'rotate(180deg)';
        }

        journeySection.append(a);
    }
    checkIfComplete();

}

