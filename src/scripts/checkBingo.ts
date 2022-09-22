export default function checkBingo(
  squares: any[],
  dims: number
): boolean | number {
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

  let temp = dims;
  let dimsPlus = dims + 1;
  let dimsMinus = dims - 1;
  const dtls = [];
  const dbls = [];

  while (temp > 0) {
    dtls.push(temp * dimsMinus);
    temp -= 1;
    dbls.push(temp * dimsPlus);
  }

  const diagTopLeftSet = new Set([0, 5, 10, 15]);
  const diagBotLeftSet = new Set([15, 10, 5, 0]);

  const rows = Array(dims).fill(dims);
  const cols = Array(dims).fill(dims);
  let diagTopLeft = dims;
  let diagBotLeft = dims;

  for (const i of clickedArray) {
    const mod = i % dims;
    const div = Math.floor(i / dims);
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
