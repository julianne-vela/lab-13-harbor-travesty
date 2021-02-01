import {
    scoreGold,
    scoreHp,
} from './results-utils.js';

import {
    getUser,
    loadUserProfile,
} from '../utils/utils.js';

import {
    dedGoldMessages,
    masterAdventurerGoldMessages,
    mediocreGoldMessages,
    hpMessages
} from '../data.js';

loadUserProfile();

const user = getUser();

// Generate User HP Message Dynamically //
const hpResult = scoreHp(user.hp);
const goldResult = scoreGold(user.gold);
const hpMessage = hpMessages[hpResult];

// Generate User Gold Message Dynamically //
let goldMessages = null;
if (hpResult === 'ded') {
    goldMessages = dedGoldMessages;
}
else if (hpResult === 'mediocre') {
    goldMessages = mediocreGoldMessages;
}
else {
    goldMessages = masterAdventurerGoldMessages;
}

const goldMessage = goldMessages[goldResult];

// Display the final story to the user, based on their results //

// story display //
const displayResults = document.querySelector('.finalResults');

// inject adventureMsg based on hpResult //
const adventureComplete = document.createElement('h2');

if (hpResult === 'ded') {
    adventureComplete.textContent = 'Oh no! You didn\'t survive your adventure!';
}
else {
    adventureComplete.textContent = 'Congrats! You\'ve completed your adventure - and SURVIVED!';
}

const displayBg = document.createElement('img');
displayBg.src = '../assets/avatars/' + user.race + '-end.png';
displayBg.style.borderRadius = '20px';

const storyResults = document.createElement('content');
storyResults.classList.add('story');

const userEndState = document.createElement('p');
userEndState.classList.add('userState');
userEndState.textContent = `Name: ${user.name} ` + '| ' + `HP: ${user.hp} ` + '| ' + `Gold: ${user.gold}`;

const hpStory = document.createElement('p');
hpStory.textContent = hpMessage;

const goldStory = document.createElement('p');
goldStory.textContent = goldMessage;

storyResults.append(adventureComplete, hpStory, goldStory);

// append all child elements to story display //
displayResults.append(displayBg, userEndState, storyResults);

