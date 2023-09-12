export const pick =
  <T>(keys: (keyof T)[]) =>
  (obj: T) =>
    keys.reduce(
      (accumulator, currentKey) => ({
        ...accumulator,
        [currentKey]: obj[currentKey]
      }),
      {}
    );
