/**
 *  https://www.codewars.com/kata/5941c545f5c394fef900000c/javascript
 */

class Warrior {
    #ranks = [
        "Pushover",
        "Novice",
        "Fighter",
        "Warrior",
        "Veteran",
        "Sage",
        "Elite",
        "Conqueror",
        "Champion",
        "Master",
        "Greatest",
    ];
    #maxExp = 10000;
    #maxLevel = 100;

    constructor() {
        this.lvl = 1;
        this.exp = 100;
        this.achievementsArr = [];
    }

    level() {
        if (this.exp >= this.#maxExp) {
            return this.#maxLevel;
        }
    
        return this.lvl;
    }

    rank() {
        const idx = this.#findRankLvl(this.level());
        return this.#ranks[idx];
    }

    experience() {
        if (this.exp >= this.#maxExp) {
            return this.#maxExp;
        }

        return this.exp;
    }

    achievements() {
        return this.achievementsArr;
    }

    training(event) {
        const [description, expPoint, minLevelRequire] = event;
        if (minLevelRequire > this.level()) {
            return "Not strong enough";
        }

        this.#computeGainExp(expPoint);
        this.achievementsArr.push(description);
        return description;
    }

    battle(opponentLevel) {
        if (opponentLevel < 1 || opponentLevel > 100) {
            return "Invalid level";
        }

        const diffLevel = opponentLevel - this.level();
        if (this.#isOpponentTooStrong(opponentLevel, diffLevel)) {
            return "You've been defeated";
        }

        const expGain = this.#getBattleExp(diffLevel);
        this.#computeGainExp(expGain);
        return this.#battleMessage(diffLevel);
    }

    /** Private Methods */
    #findRankLvl(levelInput) {
        return Math.floor(levelInput / 10);
    }

    #isOpponentTooStrong(opponentLevel, diffLevel) {
        const opponentRankLvl = this.#findRankLvl(opponentLevel);
        const yourRankLvl = this.#findRankLvl(this.level());
        const diffRankLvl = opponentRankLvl - yourRankLvl;

        return diffRankLvl >= 1 && diffLevel >= 5
    }

    #computeGainExp(experiencePoint) {
        this.exp += experiencePoint;
        this.lvl = Math.floor(this.exp / 100);
    }

    #getBattleExp(diffLevel) {
        let expGain = 0;
        if (diffLevel === 0) {
            expGain += 10;
        } else if (diffLevel === -1) {
            expGain += 5;
        } else if (diffLevel <= -2) {
            expGain += 0;
        } else {
            const exp = 20 * Math.pow(diffLevel, 2);
            expGain += exp;
        }

        return expGain;
    }

    #battleMessage(diffLevel) {
        if (diffLevel <= -2) {
            return "Easy fight";
        } else if (diffLevel <= 0) {
            return "A good fight";
        } else {
            return "An intense fight";
        }
    }
};