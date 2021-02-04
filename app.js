import {
    welcomeStr,
    firstParaStr,
    secondParaStr
} from './data.js';
import {
    makeUser,
    setUser,
} from './utils/utils.js';

// Main Section Elements //
const gameIntro = document.querySelector('.intro');

// intro elements //
const welcome = document.createElement('p');
welcome.textContent = welcomeStr;
const firstPara = document.createElement('p');
firstPara.textContent = firstParaStr;
const secondPara = document.createElement('p');
secondPara.textContent = secondParaStr;
gameIntro.append(welcome, firstPara, secondPara);

// Form Elements //
const newUserForm = document.getElementById('new-user');

const nameLegend = document.querySelector('.name-legend');
nameLegend.textContent = 'Enter Your Character Name';

const raceLegend = document.querySelector('.race-legend');
raceLegend.textContent = 'Choose Your Race';

const submitBtn = document.getElementById('new-user-submit');
submitBtn.textContent = 'Start Your Adventure!';

newUserForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(newUserForm);
    const user = makeUser(formData);

    setUser(user);

    window.location = './adventure/?id=dark-forest';
});

