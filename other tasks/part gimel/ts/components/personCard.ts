import { removeCard } from "../app.js";
import { person } from "../types";

export const createPersonCard = (person: person) => {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add(
    "card",
    "col-3",
    "m-3",
    "bg-dark",
    "border",
    "border-light",
    "rounded-3"
  );
  cardContainer.style.width = "18 rem";

  const cardImg = document.createElement("img");
  cardImg.src = `${person.image}`;
  cardImg.alt = `person-${person.name}`;
  cardImg.classList.add("card-img-top");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const nameHeading = document.createElement("h5");
  nameHeading.classList.add("card-title");
  nameHeading.innerText = `${person.name}`;

  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.innerHTML = `${person.name} was born at ${person.birth_year}.</br> 
  He is from ${person.country} and he succeeded to get worth of: ${person.worth} by ${person.source}`;

  cardBody.appendChild(nameHeading);
  cardBody.appendChild(cardText);

  cardContainer.appendChild(cardImg);
  cardContainer.appendChild(cardBody);

  cardContainer.id = `card-${person.name.replace(" ", "")}`;
  cardContainer.addEventListener("click", () => {
    removeCard(person);
  });

  return cardContainer;
};
