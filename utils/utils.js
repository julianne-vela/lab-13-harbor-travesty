const USER = 'USER';

export function setUser(user) {
    localStorage.setItem(USER, JSON.stringify(user));
}

export function getUser(user) {
    localStorage.getItem(USER, JSON.parse(user));

    return user;
}

export function skippedQuestion() {
    // if user selects 'skip' instead of answer, increment skipped property by 1
}