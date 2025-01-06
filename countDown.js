export function countdown(target) {
  const result = [];
  for (let i = target; i >= 0; i--) {
    result.push(i);
  }
  return result;
}

