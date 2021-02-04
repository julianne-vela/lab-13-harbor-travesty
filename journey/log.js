import {
    loadUserProfile,
    capitalizeFirstLetter
} from '../utils/utils.js';

import { renderLogEntry } from '../journey/quest-utils.js';

import { journeyHome } from '../data.js';

loadUserProfile();

const h1 = document.getElementById('journeyTitle');
h1.textContent = capitalizeFirstLetter(journeyHome.title);
const p = document.getElementById('journey-desc');
p.textContent = journeyHome.description;
const img = document.getElementById('journey-map');
img.src = `../assets/quest-imgs/${journeyHome.image}`;

renderLogEntry();








