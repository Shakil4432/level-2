type DuplicateRemove = <T>(value: T[]) => T[];

const dupliRemove: DuplicateRemove = (value) => {
  const res1 = value.filter((data, index) => value.indexOf(data) === index);
  return res1;
};

const dupliRes1 = dupliRemove<number>([1, 3, 3, 4, 3, 45, 54]);
console.log(dupliRes1);
