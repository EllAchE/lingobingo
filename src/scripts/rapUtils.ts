export function selectTwoRandom(wordSet: string[]): string[] {
  let randomIndices = new Set();
  while (randomIndices.size < 2) {
    let randomIndex = Math.floor(Math.random() * wordSet.length);
    randomIndices.add(randomIndex);
  }
  const a = randomIndices.values().next().value;
  randomIndices.delete(a);
  return [wordSet[a], wordSet[randomIndices.values().next().value]].map((s) => {
    return uppercaseFirst(s);
  });
}

function closestLessThan(arr: number[], target: number) {
  let left = 0;
  let right = arr.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return mid;
}

export function selectRandomRhymeSet(wordSetRanges: number[]): number {
  const randomIndex = Math.floor(Math.random() * wordSetRanges.at(-1) ?? 0);
  return closestLessThan(wordSetRanges, randomIndex);
}

function uppercaseFirst(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
