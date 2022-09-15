import { BingoCardType, Category } from '../types';

export function createBingoCard(category: Category): {
  bingoCard: BingoCardType;
  filename: string;
} {
  let filename: string = '';
  let row: number = 0;
  let bingoCard: any = [[], [], [], [], []];

  const { squares, freeParking } = category;

  let wordsCopy = [...squares];

  while (row < 5) {
    let word: string[] = wordsCopy.splice(
      Math.floor(Math.random() * wordsCopy.length),
      1
    );
    bingoCard[row].push(word[0]);
    filename += word[0];
    if (bingoCard[row].length >= 5) {
      row += 1;
    }
  }

  if (freeParking) {
    bingoCard[2][2] = freeParking;
  }

  filename += '.csv';

  return { bingoCard, filename };
}
