const USER = 'USER';

export function setUser(user) {
    localStorage.setItem(USER, JSON.stringify(user));
}

export function getUser(user) {
    localStorage.getItem(USER, JSON.parse(user));

    return user;
}

export function findById(myArray, id) {
    return myArray.find(item => item.id === id);
}

export function harborEncounters() {
    const harborEncounters = [{
        id: 'investigate',
        description: 'You approach the cart to investigate.',
        hp: +10,
        gold: +50,
        result: 'You find an old abandoned cart. You search it and find some preserved bread and jerky as well as a large pouch of gold. You gain 10 HP and 50 Gold.'
    }, {
        id: 'turn-around',
        description: 'You become weary and turn around to run the other direction, fearing this may be an ambush!',
        hp: +5,
        gold: 0,
        result: 'You run away and make it to a safe location up the road. You avoided a bandit ambush and gained 5 HP as a result.'
    }, {
        id: 'slowly-pass',
        description: 'You walk past the cart not paying it any mi.....WHAAAAAA!',
        hp: -30,
        gold: -30, // maybe clear to zero, if possible.
        result: 'Oh no! You were ambushed by a group of bandits! They beat you up and took all your gold! You lose 30 HP and 30 Gold.'
    }];
}