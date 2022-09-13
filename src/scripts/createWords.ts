export function createGrid(words: string[]) {
  let filename: string = '';
  let row: number = 0;
  let wordGrid: any = [[], [], [], [], []];

  console.log(words);
  console.log(wordGrid);
  console.log(wordGrid[-1]);

  while (words.length > 0 && (!wordGrid[-1] || wordGrid[-1].length < 5)) {
    let word: string[] = words.splice(
      Math.floor(Math.random() * words.length),
      1
    );
    console.log('word');
    console.log(word);
    if (wordGrid[row].length >= 5) {
      row += 1;
    }
    wordGrid[row].push(word[0]);
    filename += word[0];
  }

  wordGrid[2][2] = 'FREE TESLA PARKING';
  filename += '.csv';

  return { wordGrid, filename };
}
