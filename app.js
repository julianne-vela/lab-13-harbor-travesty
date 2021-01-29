import { setUser } from './utils/utils.js';

const newUserForm = document.getElementById('new-user');

newUserForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(newUserForm);

    const user = {
        name: formData.get('name'),
        race: formData.get('race'),
        completed: {},
        hp: 100,
        gold: 0,

    };

    setUser(user);

    window.location = './adventure/?id=dark-forest';
});
