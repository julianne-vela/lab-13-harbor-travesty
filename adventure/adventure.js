import { findById, setUser } from '../utils/utils.js';
import quests from '../data.js';

const USER = 'USER'; // magic string

const h1 = document.getElementById('quest-title');
const p = document.getElementById('quest-desc');
const img = document.getElementById('quest-img');
const form = document.getElementById('quest-form');

// grab the id from the URL search bar
const params = new URLSearchParams(window.location.search);
// get the value of the id key in the URL
const questId = params.get('id');

// use the id to find that quest in our data (using findById)

const quest = findById(quests, questId);

// use the quest to populate the HTML elements

h1.textContent = quest.title;
p.textContent = quest.description;
img.src = `../assets/${quest.image}`;

for (let choice of quest.choices) {
    const button = document.createElement('button');
    const label = document.createElement('label');
    const span = document.createElement('span');

    span.textContent = choice.description;

    button.type = 'button',
        button.value = choice.id;
    button.name = 'choices';

    label.append(span, button);

    form.append(label);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData('quest-form');
    // on submit - calculate the users new stats - HP and gold
    const selectionId = formData.get('choices');
    // go get the data about this choice
    const choice = findById(quest.choices, selectionId);
    const user = JSON.parse(localStorage.getItem(USER));

    user.hp += choice.hp;
    user.gold += choice.gold;

    // use the selectionId to set the property dynamically
    user.completed[questId] = true;

    // put new stats in local storage
    setUser(user);
    // send user back to quest-list
    window.location = '..quest-list.html';

});
