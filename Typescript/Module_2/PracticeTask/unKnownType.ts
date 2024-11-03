const unKnownType = (value: unknown): number | string | undefined => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value ** 2;
  } else {
    return undefined;
  }
};

console.log(unKnownType("Shakil"));
console.log(unKnownType(undefined));
