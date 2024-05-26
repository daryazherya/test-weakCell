export function createCellsValues () {
    const CHAIN_LENGTH = 7;
    return Array(CHAIN_LENGTH).fill('').map((_, i) => 2 ** (i + 1));
    
}