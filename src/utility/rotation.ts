import { howManyNumbersInNumber } from '../utility/math';

export const getOffsetAndLoopsFromRotation = (rotation: number) => ({
  offset: rotation % 360,
  loops: howManyNumbersInNumber(rotation, 360),
});

export const debugRotation = (rotation: number) => {
  const { offset, loops } = getOffsetAndLoopsFromRotation(rotation);
  const rotationRounded = Math.round(rotation);
  const offsetRounded = Math.round(offset);
  return `Rotation ${rotationRounded}
    (offset: ${offsetRounded}, loops: ${loops})`;
};

export const findNearestOffset = (offsetStart: number, offsetEnd: number) => {
  const offsetEndPositive = offsetEnd >= 0
    ? offsetEnd
    : offsetEnd + 360;
  const offsetEndNegative = offsetEnd < 0
    ? offsetEnd
    : offsetEnd - 360;

  const positiveDifference = Math.abs(offsetEndPositive - offsetStart);
  const negativeDifference = Math.abs(offsetEndNegative - offsetStart);
  const isDirectionPositive = positiveDifference < negativeDifference;

  const nearestOffset = isDirectionPositive
    ? offsetEndPositive
    : offsetEndNegative;

  return {
    isDirectionPositive,
    nearestOffset,
  };
};
