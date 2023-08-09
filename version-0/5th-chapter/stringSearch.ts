export const stringSearch = (mainStr: string, pattern: string) => {
  let matches = 0;
  const patterLength = pattern.length;

  for (let i = 0; i <= mainStr.length - patterLength; i++) {
    for (let j = 0; j < patterLength; j++) {
      if (mainStr[i + j] !== pattern[j]) break;
      if (j === pattern.length - 1) matches++;
    }
  }

  return matches;
};
