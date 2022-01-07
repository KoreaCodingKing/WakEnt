
export const easeOutExpo = (x: number): number =>
  x === 1 ? 1 : 1 - Math.pow(2, -10 * x);

export const easeInExpo = (x: number): number =>
  x === 0 ? 0 : Math.pow(2, 10 * x - 10);

/**
 * 어느 숫자의 thres% 만큼을 뺀 값을 반환합니다.
 * ex: threshold(1000, 0.01) === 1000 * 0.99
 * @param num 어느 숫자
 * @param thres 몇 %
 */
export const threshold = (num: number, thres: number) => {
  return num - num * thres;
};

/**
 * 어느 숫자의 범위를 min에서 max까지로 줄입니다.
 */
export const clamp = (num: number, min: number, max: number) =>
  Math.min(Math.max(num, min), max);
