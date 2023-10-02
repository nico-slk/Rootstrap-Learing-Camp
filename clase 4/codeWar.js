// You get an array of numbers, return the sum of all of the positives ones.
//   Example[1, -4, 7, 12] => 1 + 7 + 12 = 20;
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) sum = sum + arr[i];
  }
  return sum;
}

// Messi goals function
// Messi is a soccer player with goals in three leagues:
// - LaLiga
// - Copa del Rey;
// - Champions
// Complete the function to return his total number of goals in all three leagues.
//   Note: the input will always be valid.
// For example:
// 5, 10, 2  -- > 17;

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}
