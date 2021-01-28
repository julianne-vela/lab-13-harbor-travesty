export const quests = [{
    id: 'wakeUpInForest',
    title: 'Dark, dence forest',
    image: URL,
    description: 'You wake up in a dark, cold forest. It is raining and you are shivering. You see a light in the distance. What do you do?',
    choices: [{
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
    }],
}, {
    id: 'harbor-town',
    title: 'Harbor Town',
    image: URL,
    description: 'The next morning you wake up early, eager to get on the road to town so that you can find out what happened to you and where your family is.',
    choices: [{
        id: 'Head east',
        description: 'You head out toward the east hoping that you remembered the way back to Harbor Town.',
        encounter: harborEncounters(),


    }, {
        id: 'Head north',

    }, {
        id: 'Head south',

    }],
}];

