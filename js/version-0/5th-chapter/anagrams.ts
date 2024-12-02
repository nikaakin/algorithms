export const isAnagram = (str1: string, str2: string) => {
  if (str1.length !== str2.length) return false;

  const str1Frequency = {};
  const str2Frequency = {};
  str1
    .split("")
    .forEach((char) => (str1Frequency[char] = ++str1Frequency[char] || 1));
  str2
    .split("")
    .forEach((char) => (str2Frequency[char] = ++str2Frequency[char] || 1));

  for (const key in str1Frequency) {
    if (str2Frequency[key] !== str1Frequency[key]) return false;
  }

  return true;
};
