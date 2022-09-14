export default function extractCategories(input: string) {
  if (!input) return false;
  const userCategories: string[] = input.split(',');
  if (userCategories.length < 25) {
    return false;
  }
  return userCategories;
}
