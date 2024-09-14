/*
Same Problem as 00284.text_justification.py but redo in Typescript
*/

function fullJustify(words: string[], maxWidth: number): string[] {
    const result: string[][] = [];
    let currWidth = maxWidth;
    let temp = [];
    const finalResult: string[] = [];

    // Get the right amount of word in each row
    for (const word of words) {
        const whiteSpaceNeeded = temp.length ? 1 : 0;
        const wordLen = word.length;
        const totalSpace = wordLen + whiteSpaceNeeded;
        if (currWidth >= totalSpace) {
            currWidth -= totalSpace;
            if (whiteSpaceNeeded) temp.push(" ");
            temp.push(word);
        } else {
            result.push(temp.slice());
            temp = [word];
            currWidth = maxWidth;
            currWidth -= word.length;
        }
    }
    result.push(temp.slice());

    // format white spaces except last row
    for (let i = 0; i < result.length - 1; i++) {
        const rows = result[i];
        const { rowLength, emptySpace } = getTotalRowLength(rows);
        const diff = maxWidth - rowLength;
        const whiteSpaces = generateEmptySpaces(emptySpace, diff);
        if (!emptySpace) {
            result[i].push(whiteSpaces[0]);
        } else {
            const newRow = addWhiteSpacesToRows(whiteSpaces, rows);
            result[i] = newRow;
        }
    }
    
    // handle last row white spaces
    const lastRow = result[result.length - 1];
    const { rowLength } = getTotalRowLength(lastRow);
    const diff = maxWidth - rowLength;
    const whiteSpaces = generateEmptySpaces(0, diff);
    result[result.length - 1].push(whiteSpaces[0]);
    
    // final formatting
    for (let j = 0; j < result.length; j++) {
        const formatSentence = result[j].join("");
        finalResult.push(formatSentence);
    }
    return finalResult;
};

function addWhiteSpacesToRows(whiteSpaces: string[], rows: string[]) {
    let j = 0;
    for (let i = 0; i < rows.length; i++) {
        if (rows[i] === " ") {
            rows[i] = whiteSpaces[j];
            j++;
        }
    }
    return rows;
}

function generateEmptySpaces(emptySpace: number, diff: number): string[] {
    if (!emptySpace) {
        return [new Array(diff).fill(" ").join("")];
    }

    const whiteSpaces = new Array(emptySpace).fill(" ");
    let i = 0;
    while (diff > 0) {
        whiteSpaces[i] = whiteSpaces[i] + " ";
        diff--;
        i = (i + 1) % whiteSpaces.length;
    }
    return whiteSpaces;
}

function getTotalRowLength(rows: string[]) {
    let rowLength = 0;
    let emptySpace = 0;
    for (const word of rows) {
        rowLength += word.length
        if (word === " ") emptySpace++;
    }
    return { emptySpace, rowLength };
}