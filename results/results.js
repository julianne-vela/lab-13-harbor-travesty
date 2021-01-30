import {
    loadUserProfile,
    scoreGold,
    scoreHp,
} from './results-utils.js';

import {
    getUser,
} from '../utils.utils.js';

import { resultMessages } from '../data.js';
import { findById } from '../utils/utils.js';
import { parseHpResult } from './results-utils.js';

loadUserProfile();



const storyDisplay = document.getElementById('user-story');

