export const maxSubarraySum = (arr: number[], subLength: number) => {
  if (subLength === arr.length) return arr.reduce((acc, num) => num + acc, 0);
  if (subLength > arr.length) return null;
  let subStartIndex = 0,
    // maxStartIndex = 0, //if indexes of max sub is needed [maxStartIndex, maxStartIndex + subLength]
    sum = 0,
    maxSum = 0;

  for (let i = 0; i < subLength; i++) {
    sum += arr[i];
  }
  maxSum = sum;

  for (let i = subLength; i < arr.length; i++) {
    sum += arr[i] - arr[subStartIndex];
    subStartIndex++;
    if (sum > maxSum) {
      maxSum = sum;
      //   maxStartIndex = subStartIndex;
    }
  }

  return maxSum;
};
