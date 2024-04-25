/*
The Goal
Let's go back to basics with this simple card game: war!
Your goal is to write a program which finds out which player is the winner for a given card 
distribution of the "war" game.

Rules
War is a card game played between two players. Each player gets a variable number of cards of 
the beginning of the game: that's the player's deck. Cards are placed face down on top of each deck.
 
Step 1 : the fight
At each game round, in unison, each player reveals the top card of their deck – this is 
a "battle" – and the player with the higher card takes both the cards played and moves them to 
the bottom of their stack. The cards are ordered by value as follows, from weakest to strongest:
2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A.
 
Step 2 : war
If the two cards played are of equal value, then there is a "war". First, both players place 
the three next cards of their pile face down. Then they go back to step 1 to decide who is 
going to win the war (several "wars" can be chained). As soon as a player wins a "war", the 
winner adds all the cards from the "war" to their deck.
 
Special cases:
If a player runs out of cards during a "war" (when giving up the three cards or when doing 
the battle), then the game ends and both players are placed equally first. The test cases 
provided in this puzzle are built in such a way that a game always ends (you do not have to 
deal with infinite games) Each card is represented by its value followed by its 
suit: D, H, C, S. For example: 4H, 8C, AS.

When a player wins a battle, they put back the cards at the bottom of their deck in a precise order. 
First the cards from the first player, then the one from the second player (for a "war", all 
the cards from the first player then all the cards from the second player).

For example, if the card distribution is the following:
Player 1 : 10D 9S 8D KH 7D 5H 6S
Player 2 : 10H 7H 5C QC 2C 4H 6D
Then after one game turn, it will be:
Player 1 : 5H 6S 10D 9S 8D KH 7D 10H 7H 5C QC 2C
Player 2 : 4H 6D
 
Victory Conditions
A player wins when the other player no longer has cards in their deck.
 	Game Input
Input
Line 1: the number N of cards for player one.

N next lines: the cards of player one.

Next line: the number M of cards for player two.

M next lines: the cards of player two.

Output
If players are equally first: PAT
Otherwise, the player number (1 or 2) followed by the number of game rounds separated by a 
space character. A war or a succession of wars count as one game round.
*/

const q1: string[] = [], q2: string[] = [];
const n: number = parseInt(readline()); // the number of cards for player 1
for (let i = 0; i < n; i++) {
    const cardp1: string = readline(); // the n cards of player 1
    q1.push(cardp1);
}
const m: number = parseInt(readline()); // the number of cards for player 2
for (let i = 0; i < m; i++) {
    const cardp2: string = readline(); // the m cards of player 2
    q2.push(cardp2);
}

interface Ranking {
    [key: string]: number;
}

const ranking: Ranking = {
    "2": 0,
    "3": 1,
    "4": 2,
    "5": 3,
    "6": 4,
    "7": 5,
    "8": 6,
    "9": 7,
    "10": 8,
    "J": 9,
    "Q": 10,
    "K": 11,
    "A": 12,
};

function getCardValue(card: string, ranking: Ranking): number {
    const values = card.split("");
    values.pop();
    return ranking[values.join("")];
}

function war(q1: string[], q2: string[], war1: string[], war2: string[]): boolean {
    if (q1.length < 4 || q2.length < 4) {
        console.log("PAT");
        return true;
    } else {
        for (let i = 0; i < 3; i++) {
            war1.push(q1.shift() || "");
            war2.push(q2.shift() || "");
        }
        const warCard1 = q1.shift() || "";
        const warCard2 = q2.shift() || "";

        const warVal1 = getCardValue(warCard1, ranking);
        const warVal2 = getCardValue(warCard2, ranking);

        war1.push(warCard1);
        war2.push(warCard2);

        if (warVal1 > warVal2) {
            q1.push(...war1, ...war2);
        } else if (warVal2 > warVal1) {
            q2.push(...war1, ...war2);
        } else {
            // go to another war
            const isTie = war(q1, q2, war1, war2);
            if (isTie) return true;
        }
    }
    return false;
}

function game(q1: string[], q2: string[], ranking: Ranking): void {
    let round = 0;

    while (q1.length && q2.length) {
        const card1 = q1.shift() || "";
        const card2 = q2.shift() || "";

        const val1 = getCardValue(card1, ranking);
        const val2 = getCardValue(card2, ranking);

        if (val1 > val2) {
            q1.push(card1);
            q1.push(card2);
        } else if (val2 > val1) {
            q2.push(card1);
            q2.push(card2)
        } else { // war
            const isTie = war(q1, q2, [card1], [card2]);
            if (isTie) return;
        }
        round++;
    }

    console.log(`${!q2.length ? '1' : '2'} ${round}`);
}

game(q1, q2, ranking);