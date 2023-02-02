//Mariia
// Напишіть функцію, яка приймає два рядки
// і повертає true, якщо з літер першого рядка можна скласти другий і навпаки
// false - якщо не можна

const compare = (str1, str2) => {
  const map1 = new Map();
  const map2 = new Map();
  str1
    .trim()
    .toLowerCase()
    .split("")
    .forEach((letter) =>
      map1.has(letter)
        ? map1.set(letter, map1.get(letter) + 1)
        : map1.set(letter, 1)
    );
  str2
    .trim()
    .toLowerCase()
    .split("")
    .forEach((letter) =>
      map2.has(letter)
        ? map2.set(letter, map2.get(letter) + 1)
        : map2.set(letter, 1)
    );

  if (map1.size !== map2.size) {
    return false;
  }
  for (const [letter, value] of map1) {
    if (
      map2.get(letter) !== value ||
      (map2.get(letter) === undefined && map2.has(letter) === false)
    ) {
      return false;
    }
  }
  return true;
};

console.log(compare("test", "text"));
console.log(compare("Mom", "omm"));
console.log(compare("asd", "Sad"));
console.log(compare("asd", "ssaadd"));
console.log(compare("ssaadd", "asd"));
