const USER = 'USER';

export function setUser(user) {
    localStorage.setItem(USER, JSON.stringify(user));
}

export function getUser() {
    return JSON.parse(localStorage.getItem(USER));
}

export function findById(myArray, id) {
    return myArray.find(item => item.id === id);
}

