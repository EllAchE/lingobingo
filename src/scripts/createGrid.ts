import { BingoCardType, Category } from '../types';

export function createBingoCard(
  category: Category,
  dims: number
): {
  bingoCard: BingoCardType;
  filename: string;
} {
  console.dir('creating card');
  console.dir(dims);

  let filename: string = '';
  let row: number = 0;
  let bingoCard: any = [];

  let i = dims;
  while (i > 0) {
    bingoCard.push([]);
    i -= 1;
  }

  const { squares, freeParking } = category;

  let wordsCopy = [...squares];

  while (row < dims) {
    let word: string[] = wordsCopy.splice(
      Math.floor(Math.random() * wordsCopy.length),
      1
    );
    bingoCard[row].push(word[0]);
    filename += word[0];
    if (bingoCard[row].length >= dims) {
      row += 1;
    }
  }

  if (freeParking) {
    bingoCard[Math.floor(dims / 2)][Math.floor(dims / 2)] = freeParking;
  }

  filename += '.csv';
  return { bingoCard, filename };
}
