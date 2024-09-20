/*
433. Minimum Genetic Mutation
A gene string can be represented by an 8-character long string, with choices from 'A', 'C', 'G', 
and 'T'. Suppose we need to investigate a mutation from a gene string startGene to a gene string 
endGene where one mutation is defined as one single character changed in the gene string.
For example, "AACCGGTT" --> "AACCGGTA" is one mutation.
There is also a gene bank bank that records all the valid gene mutations. A gene must be in bank 
to make it a valid gene string. Given the two gene strings startGene and endGene and the gene 
bank bank, return the minimum number of mutations needed to mutate from startGene to endGene. 
If there is no such a mutation, return -1. Note that the starting point is assumed to be valid, 
so it might not be included in the bank.

Example 1:
Input: startGene = "AACCGGTT", endGene = "AACCGGTA", bank = ["AACCGGTA"]
Output: 1

Example 2:
Input: startGene = "AACCGGTT", endGene = "AAACGGTA", bank = ["AACCGGTA","AACCGCTA","AAACGGTA"]
Output: 2

Constraints:
    0 <= bank.length <= 10
    startGene.length == endGene.length == bank[i].length == 8
    startGene, endGene, and bank[i] consist of only the characters ['A', 'C', 'G', 'T'].

https://leetcode.com/problems/minimum-genetic-mutation/

*/

function minMutation(startGene: string, endGene: string, bank: string[]): number {
    if (!bank.includes(endGene)) return -1;
    const queue = [startGene];
    let steps = 0;
    const visited = new Set([startGene]);
    
    while (queue.length) {
        const n = queue.length;
        for (let i = 0; i < n; i++) {
            const gene = queue.shift() as string;
            if (gene === endGene) return steps;
            const genes = generateGenes(gene, bank);
            for (const mutatedGene of genes) {
                if (!visited.has(mutatedGene)) {
                    visited.add(mutatedGene);
                    queue.push(mutatedGene);
                }
            }
        }
        steps++;
    }
    return -1;
};

function generateGenes(gene: string, bank: string[]): string[] {
    const genes: string[] = [];
    for (const bankGene of bank) {
        if (possibleMutation(gene, bankGene)) genes.push(bankGene)
    }
    return genes;
}

function possibleMutation(gene1: string, gene2: string): boolean {
    let diff = 0;
    for (let i = 0; i < gene1.length; i++) {
        if (gene1[i] !== gene2[i]) diff++;
        if (diff > 1) return false;
    }
    return diff === 0 ? false : true;
}