// we can just divide `a` by `b`, but lets do it properly
// assume that 20% of `a` and 30% of `b` equal 60
export const calculate = () => {
  const percentOfA = 60 / 20;
  const percentOfB = 60 / 30;

  console.log('percentOfA', percentOfA);
  console.log('percentOfB', percentOfB);

  return percentOfA / percentOfB;
};
