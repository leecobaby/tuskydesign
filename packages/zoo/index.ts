import { getRandomAnimal } from "@tuskdesign/animals";
import { getRandomName } from "@tuskdesign/names";

const name = getRandomName();
const animal = getRandomAnimal();

// 请写一段无用代码
export const uselessCode = () => {
  const a = 1;
  const b = 2;
  const c = a + b;
  return c;
};

console.log(`${name} the ${animal.name} says ${animal.sound}!`);
