export function createGrid(words: string[]) {
  let filename: string = '';
  let row: number = 0;
  let wordGrid: any = [[], [], [], [], []];

  let wordsCopy = [...words];

  while (row < 5) {
    let word: string[] = wordsCopy.splice(
      Math.floor(Math.random() * wordsCopy.length),
      1
    );
    wordGrid[row].push(word[0]);
    filename += word[0];
    if (wordGrid[row].length >= 5) {
      row += 1;
    }
  }

  wordGrid[2][2] = 'FREE TESLA PARKING';
  filename += '.csv';

  return { wordGrid, filename };
}
