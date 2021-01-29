import {
    setUser,
    getUser,
    findById,
} from '../utils/utils.js';

const newUserData = {
    name: 'Nessima',
    race: 'Pixie',
    completed: {},
    hp: 50,
    gold: 0,
};

const adventures = [
    {
        id: 'wakeUpInForest',
        title: 'Dark and eerie forest',
        image: 'dark-forest.jpg',
        description: `You wake up in a dark, cold forest. It is raining and you are shivering. You don't know where you're at or what happened to you. Far off in the distance, you can see a faint flickering light. It might be someone's house. What do you do?`,
        choices: [
            {
                id: 'stay',
                description: 'You stay where you\'re at. Someone is bound to come looking for you...eventually.',
                hp: -10,
                gold: 0,
                result: 'You suffer from hypothermia and contract the flu. You lose 10 HP.'
            }, {
                id: 'go-to-light',
                description: 'Head toward the light to find help.',
                hp: +20,
                gold: +10,
                result: 'You find a nice family at the nearby farm who take you in and feed you a delicious meal and offer you a warm change of clothes. You gain 20 HP and 10 Gold.'
            }, {
                id: 'search-nearby',
                description: 'You search nearby for supplies.',
                hp: +10,
                gold: +5,
                result: 'You find some wild herbs and berries to sustain you for the night. Behind a nearby tree you find an old crate. When you open it, you find some ragged clothes and a small pouch of gold. You gain 10 HP and 5 Gold.'
            }
        ],
    }
    , {
        id: 'harbor-town',
        title: 'Harbor Town',
        image: 'harbor-town.jpg',
        description: 'The next morning you wake up early, eager to get on the road to town so that you can find out what happened to you and where your family is.',
        choices: [{
            id: 'Head east',
            description: 'You head out toward the east hoping that you remembered the way back to Harbor Town.',
        }, {
            id: 'Head north',
        }, {
            id: 'Head south',
        }],
    }];

const test = QUnit.test;

test('setUser should grab the users form data and seed it to localStorage', assert => {
    setUser(newUserData);
    const result = getUser();
    assert.deepEqual(result, newUserData);
});

test('getUser should return the correct user data stored in localStorage.', assert => {
    setUser(newUserData);
    const result = getUser();
    assert.deepEqual(result, newUserData);
});

test(`findById should take in 'wakeUpInForest' and return the correct quest associated with that ID`, assert => {
    const expected = {
        id: 'wakeUpInForest',
        title: 'Dark and eerie forest',
        image: 'dark-forest.jpg',
        description: `You wake up in a dark, cold forest. It is raining and you are shivering. You don't know where you're at or what happened to you. Far off in the distance, you can see a faint flickering light. It might be someone's house. What do you do?`,
        choices: [
            {
                id: 'stay',
                description: 'You stay where you\'re at. Someone is bound to come looking for you...eventually.',
                hp: -10,
                gold: 0,
                result: 'You suffer from hypothermia and contract the flu. You lose 10 HP.'
            }, {
                id: 'go-to-light',
                description: 'Head toward the light to find help.',
                hp: +20,
                gold: +10,
                result: 'You find a nice family at the nearby farm who take you in and feed you a delicious meal and offer you a warm change of clothes. You gain 20 HP and 10 Gold.'
            }, {
                id: 'search-nearby',
                description: 'You search nearby for supplies.',
                hp: +10,
                gold: +5,
                result: 'You find some wild herbs and berries to sustain you for the night. Behind a nearby tree you find an old crate. When you open it, you find some ragged clothes and a small pouch of gold. You gain 10 HP and 5 Gold.'
            }
        ],
    };
    const result = findById(adventures, 'wakeUpInForest');
    assert.deepEqual(result, expected);
});

