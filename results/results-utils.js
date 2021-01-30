import { resultMessages } from '../data.js';
import {
    getUser,
    isDead,
    findById
} from '../utils/utils.js';

export function loadUserProfile() {
    const name = document.getElementById('user-name');
    const avatar = document.getElementById('avatar');
    const userHp = document.getElementsById('user-hp');
    const userGold = document.getElementById('user-gold');

    const user = getUser();

    if (!user) {
        window.location = './';
    }

    name.textContent = user.name;
    avatar.src = '../assets/avatars/' + user.race + '.png';
    userGold.textContent = user.gold;

    if (isDead(user)) {
        userHp.textContent = 'RIP';
    } else {
        userHp.textContent = user.hp;
    }
}

export function scoreGold(gold) {
    if (gold <= 0) {
        return 'poor';
    } else if (gold < 25) {
        return 'modest';
    } return 'rich';
}

export function scoreHp(hp) {
    if (hp <= 0) {
        return 'ded';
    } else if (hp < 35) {
        return 'mediocre';
    } return 'master-adventurer';
}

const user = getUser();

const hpResult = scoreHp(user.hp);
const goldResult = scoreGold(user.gold);

console.log(goldResult);

export function parseHpResult(hpResult) {
    const userMessage = findById(resultMessages, hpResult);
    if (goldResult === 'poor') {
        userMessage + resultMessages[hpResult][0];
    }
}


