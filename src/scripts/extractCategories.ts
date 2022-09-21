import { Category } from '../types';

export default function extractCategories(input: string): Category | false {
  if (!input) return false;
  const userSquares: string[] = input.split(';');
  if (userSquares.length < 16) {
    return false;
  }
  return { squares: userSquares };
}
