const USER = 'USER';

export function setUser(user) {
    localStorage.setItem(USER, JSON.stringify(user));
}

export function getUser() {
    let user = JSON.parse(localStorage.getItem(USER));

    if (!user) {
        user = [];
        localStorage.setItem(USER, JSON.stringify(user));
    }
    return user;
}

export function findById(myArray, id) {
    return myArray.find(item => item.id === id);
}

export function isDead(user) {
    return user.hp <= 0;
}

export function capitalizeFirstLetter(strInput) {
    const separatedWords = strInput.toLowerCase().split(' ');
    for (let i = 0; i < separatedWords.length; i++) {
        separatedWords[i] = separatedWords[i].charAt(0).toUpperCase() + separatedWords[i].substring(1);
    }
    return separatedWords.join(' ');
}

export function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        race: formData.get('race'),
        hp: 50,
        gold: 0,
        completed: {},
    };
    return user;
}

export function loadUserProfile() {
    const name = document.getElementById('user-name');
    const avatar = document.getElementById('avatar');
    const userHp = document.getElementById('user-hp');
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

