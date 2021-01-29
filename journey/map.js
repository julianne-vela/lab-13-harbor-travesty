import { mainQuest } from '../data.js';
import {
    checkIfComplete,
} from './quest-utils.js';

const ul = document.querySelector('ul');
checkIfComplete();

for (let quest of mainQuest) {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.textContent = quest.title;
    a.href = `../adventure/?id=${quest.id}`;

    li.append(a);
    ul.append(li);
}








