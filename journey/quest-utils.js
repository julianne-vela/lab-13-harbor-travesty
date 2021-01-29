import { getUser } from '../utils/utils.js';
import { mainQuest } from '../data.js';

export function checkIfComplete() {
    const user = getUser();
    let masterAdventurer = true;

    for (let quest of mainQuest) {
        if (!user.completed[quest.id]) {
            masterAdventurer = false;
        }
    }

    if (user.hp < 1 || masterAdventurer) {
        window.location = '../results/index.html';
    }
}