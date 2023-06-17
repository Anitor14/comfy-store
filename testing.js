let numbers = [5, 2, 9, 1, 3];
let tempNumbersArray = [];
tempNumbersArray = numbers.sort((a, b) => a - b);
console.log(tempNumbersArray, numbers);

const filters = {
  text: "one weekend in college",
  company: "all",
  category: "all",
  color: "all",
  min_price: 0,
  max_price: 0,
  price: 50,
  shipping: false,
};
const newObject = { ...filters, ["price"]: "ranch" };

console.log(newObject);
