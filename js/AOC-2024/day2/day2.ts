import { mainInput } from "./day2-input";

function getLines(str: string) {
  return str.split("\n");
}

export function day2_1(str: string) {
  const lines = getLines(str);
  let safeCount = 0;

  lines.forEach((line: string) => {
    if (!line.trim()) return;
    const nums = line.split(" ");
    let isDecreasing = +nums[1] < +nums[0];
    let isSafe = true;

    for (let i = 1; i < nums.length; i++) {
      const sub = +nums[i] - +nums[i - 1];
      const absSub = Math.abs(sub);
      if (isDecreasing && sub > 0) {
        isSafe = false;
      } else if (!isDecreasing && sub < 0) {
        isSafe = false;
      } else if (absSub < 1 || absSub > 3) {
        isSafe = false;
      }
    }

    if (isSafe) {
      safeCount++;
    }
  });

  return safeCount;
}

export function day2_2(str: string) {
  const lines = getLines(str);
  let safeCount = 0;

  lines.forEach((line: string) => {
    if (!line.trim()) return;
    const nums = line.split(" ");
    const subs = nums.map((num, index) => +(nums[index + 1] || 0) - +num);
    subs.pop();
    let isSafe = true;
    let forgiven = false;

    subs.forEach((sub, index) => {
      // if(sub)
    });
  });

  return safeCount;
}

export function day2_1_with_input() {
  return day2_1(mainInput);
}
export function day2_2_with_input() {
  return day2_2(mainInput);
}
