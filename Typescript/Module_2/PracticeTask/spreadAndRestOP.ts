type TotalSumOfArray = (...value: number[]) => number;

const totalSumOfArray: TotalSumOfArray = (...value) => {
  console.log(value);
  const res1 = value.reduce((total, num) => total + num, 0);
  return res1;
};

const total = totalSumOfArray(10, 20, 30, 40);
console.log(total);
