import { adventures } from '../data.js';
import {
    getUser,
} from '../utils/utils.js';

const ul = document.getElementById('quest-log');
const user = getUser();
let masterAdventurer = true;

for (let quest of adventures) {
    if (!user.completed[quest.id]) {
        masterAdventurer = false;
    }
}

if (user.hp < 1 || masterAdventurer) {
    window.location = '../results/index.html';
}

for (let quest of adventures) {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.textContent = quest.title;
    a.href = `../adventure/?id=${quest.id}`;

    li.append(a);
    ul.append(li);
}






