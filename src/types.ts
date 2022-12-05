export interface Category {
  freeParking?: string;
  themeColor?: string;
  squares: string[];
}

type StringRow = string[];

export type BingoCardType = StringRow[];

export interface SquareState {
  isClicked?: boolean;
  // text: string;
  // position: number;
}
