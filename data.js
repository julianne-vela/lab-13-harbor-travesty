import { getUser } from './utils/utils.js';

export const welcomeStr = 'Welcome to Harbor Travesty!';
export const firstParaStr = `This adventure will take you on a journey of discovery and subterfuge. You'll need to survive the long and arduous journey back home to Harbor Town.`;
export const secondParaStr = `Plus, you'll need to try and keep as much gold as possible so that you and your family can live comfortably once you're reunited. Good luck!`;

export const raceOptions = [
    {
        id: 'human'
    }, {
        id: 'elf'
    }, {
        id: 'orc'
    }, {
        id: 'gnome'
    }, {
        id: 'pixie'
    }
];



export const journeyHome = {
    id: 'journey-home',
    title: 'Journey Home',
    image: 'journey-map.jpg',
    description: 'The next morning you wake up early, still not quite sure how you ended up here in the first place but you are eager to get out of this wretched place once and for all and uncover the mystery of what happened to you.'
};

export const encounters = [
    {
        id: 'investigate',
        title: 'head-east',
        description: 'You approach the cart to investigate.',
        hp: +10,
        gold: +50,
        result: 'You find an old abandoned cart. You search it and find some preserved bread and jerky as well as a large pouch of gold. You gain 10 HP and 50 Gold.'
    }, {
        id: 'turn-around',
        title: 'head-east',
        description: 'You become weary and turn around to run the other direction, fearing this may be an ambush!',
        hp: +5,
        gold: 0,
        result: 'You run away and make it to a safe location up the road. You avoided a bandit ambush and gained 5 HP as a result.'
    }, {
        id: 'slowly-pass',
        title: 'head-east',
        description: 'You walk past the cart not paying it any mi.....WHAAAAAA!',
        hp: -30,
        gold: -30, // maybe clear to zero, if possible.
        result: 'Oh no! You were ambushed by a group of bandits! They beat you up and took all your gold! You lose 30 HP and 30 Gold.'
    }, {
        id: 'sleep',
        title: 'head-west',
        description: 'You\'re exhausted from your travels and fall right asleep.',
        hp: +20,
        gold: -10,
        result: 'You were out cold last night! While you got plenty of rest, you didn\'t notice the vagrant sneaking into your camp last night and stealing some of your gold. You gain 20 HP but lose 10 gold.'
    }, {
        id: 'eat-then-sleep',
        title: 'head-west',
        description: 'It\'s been a long day, but you\'re hungry so you decide to make a campfire and cook up some food before turning in for the night.',
        hp: +30,
        gold: 0,
        result: 'While you don\'t have much available, you were able to craft together a pretty satisfying meal. You then fell comfortably asleep and rested for the evening. You gain 30HP!'
    }, {
        id: 'stay-on-watch',
        title: 'head-west',
        description: 'You\'re nervous about falling asleep while not in a safe location so you stay up to watch for trouble.',
        hp: -10,
        gold: +20,
        result: 'Your evening passes without much happening. You did manage to find some gold laying around outside your camp but you didn\'t get much rest last night. You gain 20 gold but lose 10 HP.'
    }, {
        id: 'investigate',
        title: 'head-south',
        description: 'You approach the glowing box to investigate.',
        hp: +10,
        gold: +50,
        result: 'You search it and find some preserved bread and jerky as well as a large pouch of gold. You gain 10 HP and 50 Gold.'
    }, {
        id: 'keep-walking',
        title: 'head-south',
        description: 'You ignore the box and continue on your journey.',
        hp: +20,
        gold: 0,
        result: 'You continue on your journey toward the Southern Bell without issue. You gain 20HP.'
    }, {
        id: 'pick-up',
        title: 'head-south',
        description: 'You don\'t have time to search the box but you are curious so you pick it up and store it in your pack for later.',
        hp: 0,
        gold: 0,
        result: 'You place the glowing box in your pack and continue on your journey toward the Southern Bell. After several hours you begin to feel a bit uneasy. Not knowing why, you decide to make camp for the night to get some rest.'
    }
];

export const eastEncounters = [
    {
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
    }
];

export const westEncounters = [
    {
        id: 'sleep',
        description: 'You\'re exhausted from your travels and fall right asleep.',
        hp: +20,
        gold: -10,
        result: 'You were out cold last night! While you got plenty of rest, you didn\'t notice the vagrant sneaking into your camp last night and stealing some of your gold. You gain 20 HP but lose 10 gold.'
    }, {
        id: 'eat-then-sleep',
        description: 'It\'s been a long day, but you\'re hungry so you decide to make a campfire and cook up some food before turning in for the night.',
        hp: +30,
        gold: 0,
        result: 'While you don\'t have much available, you were able to craft together a pretty satisfying meal. You then fell comfortably asleep and rested for the evening. You gain 30HP!'
    }, {
        id: 'stay-on-watch',
        description: 'You\'re nervous about falling asleep while not in a safe location so you stay up to watch for trouble.',
        hp: -10,
        gold: +20,
        result: 'Your evening passes without much happening. You did manage to find some gold laying around outside your camp but you didn\'t get much rest last night. You gain 20 gold but lose 10 HP.'
    }
];

export const southEncounters = [
    {
        id: 'investigate',
        description: 'You approach the glowing box to investigate.',
        hp: +10,
        gold: +50,
        result: 'You search it and find some preserved bread and jerky as well as a large pouch of gold. You gain 10 HP and 50 Gold.'
    }, {
        id: 'keep-walking',
        description: 'You ignore the box and continue on your journey.',
        hp: +20,
        gold: 0,
        result: 'You continue on your journey toward the Southern Bell without issue. You gain 20HP.'
    }, {
        id: 'pick-up',
        description: 'You don\'t have time to search the box but you are curious so you pick it up and store it in your pack for later.',
        hp: 0,
        gold: 0,
        result: 'You place the glowing box in your pack and continue on your journey toward the Southern Bell. After several hours you begin to feel a bit uneasy. Not knowing why, you decide to make camp for the night to get some rest.'
    }
];

export const questData = [
    {
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
            },
            {
                id: 'go-to-light',
                description: 'Head toward the light to find help.',
                hp: +20,
                gold: +10,
                result: 'You find a nice family at the nearby farm who take you in and feed you a delicious meal and offer you a warm change of clothes. You gain 20 HP and 10 Gold.'
            },
            {
                id: 'search-nearby',
                description: 'You search nearby for supplies.',
                hp: +10,
                gold: +5,
                result: 'You find some wild herbs and berries to sustain you for the night. Behind a nearby tree you find an old crate. When you open it, you find some ragged clothes and a small pouch of gold. You gain 10 HP and 5 Gold.'
            }
        ],
    },
    {
        id: 'head-east',
        title: 'The road East',
        image: 'head-east.jpg',
        description: 'You head out toward the east hoping that you remembered the way back to Harbor Town. After a bit of traveling, you come across an old, seemingly abandoned, wagon. What do you do?',
        choices: [
            {
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
            }
        ]
    },
    {
        id: 'head-west',
        title: 'W3 Inc.',
        image: 'head-west.png',
        description: 'You decide to head out west to see what information you can discover about how you ended up here and how you can get back to Harbor Town. After a long day\'s journey, you decide to make camp for the night. What do you do?',
        choices: [
            {
                id: 'sleep',
                description: 'You\'re exhausted from your travels and fall right asleep.',
                hp: +20,
                gold: -10,
                result: 'You were out cold last night! While you got plenty of rest, you didn\'t notice the vagrant sneaking into your camp last night and stealing some of your gold. You gain 20 HP but lose 10 gold.'
            }, {
                id: 'eat-then-sleep',
                description: 'You eat and then go to sleep.',
                hp: +30,
                gold: 0,
                result: 'It was a long day so you decided to make a campfire and cook up some food before turning in for the night. While you don\'t have much available, you were able to craft together a pretty satisfying meal. You then fell comfortably asleep and rested for the evening. You gain 30HP!'
            }, {
                id: 'stay-on-watch',
                description: 'You stay up to watch for trouble.',
                hp: -10,
                gold: +20,
                result: 'You were too nervous to sleep last night so you stayed up to watch for trouble. Your evening passes without much happening. You did manage to find some gold laying around outside your camp but you didn\'t get much rest last night. You gain 20 gold but lose 10 HP.'
            }
        ]
    },
    {
        id: 'head-south',
        title: 'Southern Bell',
        image: 'head-south.jpg',
        description: 'You vaguely rememeber something about a large bell toward the south being a beacon for Harbor Town. You head out toward the south in search of the beacon. Shortly after beginning your journey, you come across a strange glowing box on the side of the road. What do you do?',
        choices: [
            {
                id: 'investigate',
                description: 'You approach the glowing box to investigate.',
                hp: +10,
                gold: +50,
                result: 'You find a strange pulsating obelisk in the box. You hear it speak to you but aren\'t sure what exactly it is trying to tell you but you get the sense that it is trying to help you. You gain 10HP and 50 gold!',
            }, {
                id: 'keep-walking',
                description: 'You ignore the box and continue on your journey.',
                hp: +20,
                gold: 0,
                result: 'You continue on your journey toward the Southern Bell without issue. You gain 20HP.'
            }, {
                id: 'pick-up',
                description: 'You pick it up and store it in your pack for later.',
                hp: 0,
                gold: 0,
                result: 'You didn\'t have time to investigate so you placed the glowing box in your pack and continued on your journey toward the Southern Bell. After several hours you begin to feel a bit uneasy. Not knowing why, you decide to make camp for the night to get some rest.'
            }
        ]
    }
];

export const hpMessages = {
    ded: 'Womp Womp! You couldn\'t survive the journey back home to Harbor Town. What a travesty!',
    mediocre: 'Wow! You just barely made it back home. You were really cutting it close there. I mean, it wasn\'t THAT difficult of a game!',
    masterAdventurer: `Her ye her ye! All hail the Master Adventurer! It is so decreed that ${getUser().name} is the best adventurer to cross these lands! Shower them with riches and praise!`,
};

export const dedGoldMessages = {
    poor: 'You lost all your gold to bandits and gambling. Your family is left with nothing but humiliation.',
    modest: 'You managed to save a bit of gold from your enemies and leave that to your family upon death. It\'s not much, but at least they can buy some bread.',
    rich: 'Upon death, your body was found with a cryptic message and a map. When given to your family, they realized this was the location of your stash and were the only ones able to decode it. They lived a long and weathly life thanks to your prowess.'
};

export const mediocreGoldMessages = {
    poor: 'You lost all your gold to bandits and gambling. Your family shuns you and you are left to your own squally in the streets of Habor Town.',
    modest: 'You managed to save a bit of gold from your enemies so you and your family have something to live off of. It\'s not much, but at least you can buy some bread.',
    rich: 'You became very adept at deception and subterfuge throughout your travels. This allowed you to easily hide your gold and riches from your enemies so while you may not be in the best of heath, at least you and your family can live a wealthy lifestyle.',
};

export const masterAdventurerGoldMessages = {
    poor: 'While you may be the greatest adventurer around, you certainly aren\'t the best gold-manager. You had a bit of a gambling problem from all the fame and glory and lost all your gold.',
    modest: 'Not only were you able to survive the trevails of your adventure, but you were even able to hang on to a bit of your gold so you can live comfortably in your glory with your family by your side.',
    rich: 'Rightfully so, a Master Adventurer also must be a master at subterfuge. You were able to easily deceive your enemies and stash your gold and riches away during your travels. Upon returning home, you were granted a trove of treasure and a castle on the hill. You and your family live out the rest of your long life in luxury and bliss.',
};


