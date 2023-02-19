import { cities, stringCities } from "../app.js";
import { ARROW_ICON, CITIES_INPUT, CLICKED_CITIES_CONTAINER, DROP_DAWN_CONTAINER, } from "./domService.js";
export const renderDropDown = (citiesToRender, input = undefined) => {
    while (DROP_DAWN_CONTAINER.hasChildNodes()) {
        DROP_DAWN_CONTAINER.removeChild(DROP_DAWN_CONTAINER.firstChild);
    }
    if ((input !== "" || input === undefined) && citiesToRender.length) {
        DROP_DAWN_CONTAINER.classList.remove("d-none");
        DROP_DAWN_CONTAINER.classList.add("d-block");
    }
    else {
        DROP_DAWN_CONTAINER.classList.remove("d-block");
        DROP_DAWN_CONTAINER.classList.add("d-none");
    }
    citiesToRender.forEach((city, ind, arr) => {
        const divElem = document.createElement("div");
        divElem.classList.add("py-2", "ps-2", "border-bottom");
        if (ind === 0)
            divElem.classList.add("rounded-top-3");
        if (ind === arr.length - 1) {
            divElem.classList.remove("border-bottom");
            divElem.classList.add("rounded-bottom-3");
        }
        divElem.innerText = city;
        DROP_DAWN_CONTAINER.appendChild(divElem);
        divElem.addEventListener("mouseenter", () => {
            listItemWasMouseEntered(divElem);
        });
        divElem.addEventListener("mouseleave", () => {
            listItemWasMouseLeaved(divElem);
        });
        divElem.addEventListener("click", () => {
            listItemWasClicked(divElem);
        });
    });
};
export const findMatchingCities = () => {
    const input = CITIES_INPUT.value;
    const citiesToRender = [];
    const inputCharacters = input.split("");
    cities.forEach((cityObj) => {
        let isMatch = true;
        inputCharacters.forEach((char) => {
            if (cityObj.city.includes(char) === false &&
                cityObj.city.includes(char.toLowerCase()) === false &&
                cityObj.city.includes(char.toUpperCase()) === false)
                isMatch = false;
        });
        if (isMatch) {
            citiesToRender.push(cityObj.city);
        }
    });
    renderDropDown(citiesToRender, input);
};
export const arrowBtnFunc = () => {
    if (ARROW_ICON.classList.contains("bi-arrow-down")) {
        renderDropDown(stringCities.sort());
        ARROW_ICON.classList.remove("bi-arrow-down");
        ARROW_ICON.classList.add("bi-arrow-up");
    }
    else {
        findMatchingCities();
        ARROW_ICON.classList.remove("bi-arrow-up");
        ARROW_ICON.classList.add("bi-arrow-down");
    }
};
const listItemWasMouseEntered = (divElem) => {
    divElem.classList.add("bg-primary");
};
const listItemWasMouseLeaved = (divElem) => {
    divElem.classList.remove("bg-primary");
};
const listItemWasClicked = (divElem) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("col-12", "display-6", "text-center");
    newDiv.innerText = `* ${divElem.innerText}`;
    CLICKED_CITIES_CONTAINER.appendChild(newDiv);
    CITIES_INPUT.value = "";
    findMatchingCities();
};
