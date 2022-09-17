export default function checkBingo(squares: any[]): boolean | number {
  const stateCopy = [...squares];
  const clickedArray: number[] = stateCopy
    .map((cellState, i) => {
      cellState.index = i;
      return cellState;
    })
    .filter((cellState) => {
      return cellState.isClicked;
    })
    .map((cellState) => {
      return cellState.index;
    });

  const diagTopLeftSet = new Set([0, 6, 12, 18, 24]);
  const diagBotLeftSet = new Set([20, 16, 12, 8, 4]);

  const rows = [5, 5, 5, 5, 5];
  const cols = [5, 5, 5, 5, 5];
  let diagTopLeft = 5;
  let diagBotLeft = 5;

  for (const i of clickedArray) {
    const mod = i % 5;
    const div = Math.floor(i / 5);
    cols[mod] -= 1;
    rows[div] -= 1;

    if (diagTopLeftSet.has(i)) {
      diagTopLeft -= 1;
    }
    if (diagBotLeftSet.has(i)) {
      diagBotLeft -= 1;
    }
  }

  const overallMin = Math.min(...rows, ...cols, diagTopLeft, diagBotLeft);

  if (overallMin == 0) {
    return 0;
  }
  return overallMin;
}
