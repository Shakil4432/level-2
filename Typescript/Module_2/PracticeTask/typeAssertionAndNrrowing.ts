const stringOrNumber = (
  value: string | number
): string | number | undefined => {
  if (typeof value === "string") {
    return `the length of this string is ${value.length}`;
  } else if (typeof value === "number") {
    return value * 100;
  } else {
    return undefined;
  }
};

const stringOrNumberRes1 = stringOrNumber("100");
const stringOrNumberRes2 = stringOrNumber(100);
console.log(stringOrNumberRes1, stringOrNumberRes2);
