export function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const fitHeight = (elemToFit: HTMLElement, elemArr: Array<Element>) => {
  let fittedHeight: string = `100vh`;
  elemArr.forEach((elem) => {
    fittedHeight = `${fittedHeight} - ${getComputedStyle(elem).height}`;
  });
  elemToFit.style.height = `calc(${fittedHeight})`;
};
