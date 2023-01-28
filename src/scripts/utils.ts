export default function addFreeParkingText(word: string) {
  const res = /free parking|freeparking/i.test(word ?? '');
  if (!res && word) {
    word = 'Free%20Parking%20-%20' + word;
  }
  return word;
}
