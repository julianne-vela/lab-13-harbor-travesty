import { setUser } from './utils/utils.js';

const newUserForm = document.getElementById('new-user');

newUserForm.addEventListener('submit', (e) => {
    e.preventDefault;

    const formData = new FormData(newUserForm);

    const user = {
        name: formData.get('name'),
        color: formData.get('color'),
        completed: {},

    };

    setUser(user);

    window.location = './q-list/index.html';
});
