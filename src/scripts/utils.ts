export default function addFreeParkingText(word: string) {
  const res = /free parking|freeparking/i.test(word ?? '');
  console.log('result of tr');
  console.log(res);
  if (!res && word) {
    word = 'Free%20Parking%20-%20' + word;
  }
  console.log(word);
  return word;
}
