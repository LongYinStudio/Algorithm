function isValid(s: string): boolean {
  if (s.length % 2 === 1) return false;
  const pairs = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);
  const noMatch: string[] = [];
  for (let ch of s) {
    if (pairs.has(ch)) {
      noMatch.push(ch);
    } else {
      const top = noMatch.pop();
      if (top === undefined || pairs.get(top) !== ch) {
        return false;
      }
    }
  }
  return noMatch.length === 0;
}

console.log(isValid("({}){}{}[{}]"));
