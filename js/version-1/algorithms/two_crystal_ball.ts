// https://backbencher.dev/two-crystal-ball-problem-using-javascript

export const two_crystal_balls = (arr: boolean[]) => {
  const jump = Math.floor(Math.sqrt(arr.length));
  for (let i = 0; i < arr.length; i += jump) {
    if (arr[i + jump] === true) {
      for (let j = i; j <= i + jump; j++) {
        if (arr[j] === true) return j;
      }
    }
  }

  return -1;
};
