const numbers = [1, 2, 3, 4, 5, 6];

separateArray(numbers);
// должен вернуть { even: [2, 4, 6], odd: [1, 3, 5] }

function separateArray(array) {
  // Ваш код здесь
  
  let obj = { even: [], odd: [] };
  for (let i = 1; i <= array.length; i++) {
    if ([i] % 2 == 0) {
      obj.even.push([i]);
    } else {
      obj.odd.push([i])
    }
  }
  return obj;
}