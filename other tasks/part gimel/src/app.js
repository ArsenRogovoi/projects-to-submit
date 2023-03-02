import { createPersonCard } from "./components/personCard.js";
import jsonArr from "./json/vipList.json" assert { type: "json" };
console.log(jsonArr);
const cardsContainer = document.querySelector("#cards-container");
jsonArr.map((person) => {
    cardsContainer?.appendChild(createPersonCard(person));
});
export const removeCard = (person) => {
    jsonArr.filter((personObj) => {
        if (personObj === person) {
            const containerToRmv = document.querySelector(`#card-${personObj.name.replace(" ", "")}`);
            cardsContainer?.removeChild(containerToRmv);
        }
    });
};
