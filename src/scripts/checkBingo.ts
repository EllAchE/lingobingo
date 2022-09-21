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

  const diagTopLeftSet = new Set([0, 5, 10, 15]);
  const diagBotLeftSet = new Set([15, 10, 5, 0]);

  const rows = [4, 4, 4, 4, 4];
  const cols = [4, 4, 4, 4, 4];
  let diagTopLeft = 4;
  let diagBotLeft = 4;

  for (const i of clickedArray) {
    const mod = i % 4;
    const div = Math.floor(i / 4);
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
