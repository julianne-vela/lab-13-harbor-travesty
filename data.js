import { getUser } from './utils/utils.js';

export const beginningQuest = {
    id: 'dark-forest',
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

export const journeyHome = {
    id: 'journey-home',
    title: 'Journey Home',
    image: 'journey-map.jpg',
    description: 'The next morning you wake up early, still not quite sure how you ended up here in the first place but you are eager to get out of this wretched place once and for all and uncover the mystery of what happened to you.'
};

export const mainQuest = [
    {
        id: 'head-east',
        title: 'Start heading East!',
        image: 'traveling-east.jpg',
        description: 'You head out toward the east hoping that you remembered the way back to Harbor Town. After a bit of traveling, you come across an old, seemingly abandoned, wagon. What do you do?',
        encounters: [
            {
                id: 'investigate',
                description: 'You approach the wagon to investigate.',
                hp: +10,
                gold: +50,
                result: 'You search it and find some preserved bread and jerky as well as a large pouch of gold. You gain 10 HP and 50 Gold.'
            }, {
                id: 'turn-around',
                description: 'You become weary and turn around to run the other direction, fearing this may be an ambush!',
                hp: +5,
                gold: 0,
                result: 'You run away and make it to a safe location up the road. You avoided a bandit ambush and gained 5 HP as a result.'
            }, {
                id: 'slowly-pass',
                description: 'You walk past the wagon not paying it any mi...',
                hp: -30,
                gold: -30,
                // maybe clear to zero, if possible.
                result: '...WHAAAAAA! Oh no! You were ambushed by a group of bandits! They beat you up and took all your gold! You lose 30 HP and 30 Gold.'
            }]
    }, {
        id: 'head-west',
        title: 'Head out West!',
        description: 'xxxxxxx',
        encounters: [
            {
                id: 'investigate',
                description: 'You approach the cart to investigate.',
                hp: +10,
                gold: +50,
                result: 'You search it and find some preserved bread and jerky as well as a large pouch of gold. You gain 10 HP and 50 Gold.'
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
            }]

    }, {
        id: 'head-south',
        title: 'Head down South!',
        description: 'You head out toward the east hoping that you remembered the way back to Harbor Town. After a bit of traveling, you come across an old, seemingly abandoned, buggy. What do you do?',
        encounters: [
            {
                id: 'investigate',
                description: 'You approach the cart to investigate.',
                hp: +10,
                gold: +50,
                result: 'You search it and find some preserved bread and jerky as well as a large pouch of gold. You gain 10 HP and 50 Gold.'
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
            }]
    }];

export const eastEncounters = [{
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

export const resultMessages = [
    {
        id: 'ded',
        image: '',
        message: 'Womp Womp! You couldn\'t survive the journey back home to Harbor Town. What a travesty!',
        status: {
            poor: 'You lost all your gold to bandits and gambling. Your family is left with nothing but humiliation.',
            modest: 'You managed to save a bit of gold from your enemies and leave that to your family upon death. It\'s not much, but at least they can buy some bread.',
            rich: 'Upon death, your body was found with a cryptic message and a map. When given to your family, they realized this was the location of your stash and were the only ones able to decode it. They lived a long and weathly life thanks to your prowess.',
        }
    },
    {
        id: 'mediocre',
        image: '',
        message: 'Wow! You just barely made it back home. You were really cutting it close there. I mean, it wasn\'t THAT difficult of a game!',
        status: {
            poor: 'You lost all your gold to bandits and gambling. Your family shuns you and you are left to your own squally in the streets of Habor Town.',
            modest: 'You managed to save a bit of gold from your enemies so you and your family have something to live off of. It\'s not much, but at least you can buy some bread.',
            rich: 'You became very adept at deception and subterfuge throughout your travels. This allowed you to easily hide your gold and riches from your enemies so while you may not be in the best of heath, at least you and your family can live a wealthy lifestyle.',
        }
    },
    {
        id: 'master-adventurer',
        image: '',
        message: `Her ye her ye! All hail the Master Adventurer! It is so decreed that ${getUser().name} is the best adventurer to cross these lands! Shower them with riches and praise!`,
        status: {
            poor: 'While you may be the greatest adventurer around, you certainly aren\'t the best gold-manager. You had a bit of a gambling problem from all the fame and glory and lost all your gold.',
            modest: 'Not only were you able to survive the trevails of your adventure, but you were even able to hang on to a bit of your gold so you can live comfortably in your glory with your family by your side.',
            rich: 'Rightfully so, a Master Adventurer also must be a master at subterfuge. You were able to easily deceive your enemies and stash your gold and riches away during your travels. Upon returning home, you were granted a trove of treasure and a castle on the hill. You and your family live out the rest of your long life in luxury and bliss.',
        }
    }
];
