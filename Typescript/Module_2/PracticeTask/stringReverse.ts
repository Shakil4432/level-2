{
  type StringReverse = (value: string) => string;
  const stringReverse: StringReverse = (value) => {
    const res1 = value.split("");
    const res2 = res1.reverse();
    const res3 = res2.join("");
    return res3;
  };

  const res1 = stringReverse("hello");
  console.log(res1);
}
