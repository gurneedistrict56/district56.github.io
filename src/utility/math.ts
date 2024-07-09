export const howManyNumbersInNumber = (
  numerator: number,
  denominator: number,
) => {
  const rawFraction = numerator / denominator;
  const absoluteResult = Math.floor(Math.abs(rawFraction));
  return rawFraction >= 0 || absoluteResult === 0
    ? absoluteResult
    : -absoluteResult;
};
