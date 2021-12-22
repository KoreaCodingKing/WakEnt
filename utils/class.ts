export const concatClass = (...classNames: (string | boolean | undefined)[]) =>
  classNames.filter((v) => typeof v === 'string').join(' ');
