export function scoreGold(gold) {
    if (gold <= 0) {
        return 'poor';
    }
    else if (gold < 25) {
        return 'modest';
    }
    return 'rich';
}

export function scoreHp(hp) {
    if (hp <= 0) {
        return 'ded';
    }
    else if (hp < 35) {
        return 'mediocre';
    }
    return 'masterAdventurer';
}

