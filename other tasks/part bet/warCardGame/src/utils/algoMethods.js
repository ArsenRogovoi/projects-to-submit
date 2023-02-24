export function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const fitHeight = (elemToFit, elemArr) => {
    let fittedHeight = `100vh`;
    elemArr.forEach((elem) => {
        fittedHeight = `${fittedHeight} - ${getComputedStyle(elem).height}`;
    });
    elemToFit.style.height = `calc(${fittedHeight})`;
};
