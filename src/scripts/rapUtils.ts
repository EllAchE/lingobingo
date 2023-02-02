import axios from 'axios';

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

export async function getRhymes(word: string) {
  const url = `https://rhymebrain.com/talk?function=getRhymes&word=${word}&lang=en&includePron=1`;
  const res = await axios(url);
  const fullRhymes = res.data
    .filter((wordData) => {
      return wordData.score === 300;
    })
    .map((wordData) => {
      return wordData.word;
    });

  fullRhymes.push(word);
  return fullRhymes;
}
