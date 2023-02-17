export const randNumber = () => {
  return Math.round(Math.random() * 9_000_000 + 1_000_000);
};
export const generateId = (array: Array<any>): number => {
  const random = randNumber();
  if (array.find((item) => item.id === random)) return generateId(array);
  return random;
};
