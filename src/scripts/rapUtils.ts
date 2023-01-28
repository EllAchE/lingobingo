export function selectTwoRandom(arr: string[]): string[] {
  let randomIndices = new Set();
  while (randomIndices.size < 2) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    randomIndices.add(randomIndex);
  }
  const a = randomIndices.values().next().value;
  randomIndices.delete(a);
  return [arr[a], arr[randomIndices.values().next().value]].map((s) => {
    return uppercaseFirst(s);
  });
}

export function selectRandom(arr: string[][]) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function uppercaseFirst(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
