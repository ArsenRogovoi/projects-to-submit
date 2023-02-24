import { cardSuit, cardValue } from "../types.js";
import { getRndInteger } from "../utils/algoMethods.js";
import { Card } from "./cardModel.js";
export class Deck {
    #cardAmountOfSuitSchema;
    #cards;
    constructor(type = "classic", cardAmountOfSuitSchema = []) {
        if (type === "classic") {
            this.#cardAmountOfSuitSchema = this.createCardAmountOfSuitSchema();
        }
        else {
            this.#cardAmountOfSuitSchema = cardAmountOfSuitSchema;
        }
        this.#cards = this.createRandomDeck();
    }
    createCardAmountOfSuitSchema() {
        const cardAmountOfSuitSchema = [];
        const suitRange = [
            cardSuit.CLUB,
            cardSuit.DIMOND,
            cardSuit.HART,
            cardSuit.SPADE,
        ];
        const valueRange = [
            cardValue.A,
            cardValue.TWO,
            cardValue.THREE,
            cardValue.FOUR,
            cardValue.FIVE,
            cardValue.SIX,
            cardValue.SEVEN,
            cardValue.EIGHT,
            cardValue.NINE,
            cardValue.TEN,
            cardValue.J,
            cardValue.Q,
            cardValue.K,
        ];
        for (let suit of suitRange) {
            for (let value of valueRange) {
                cardAmountOfSuitSchema.push([suit, value]);
            }
        }
        return cardAmountOfSuitSchema;
    }
    createRandomDeck() {
        const deckOfCards = new Set();
        let counter = 0;
        const deckOfCardsArr = [];
        while (this.#cardAmountOfSuitSchema.length) {
            deckOfCards.add(this.createRandomCard());
            counter++;
        }
        console.log(`the random method has been run ${counter} times.`);
        deckOfCards.forEach((card) => {
            deckOfCardsArr.push(card);
        });
        return deckOfCardsArr;
    }
    createRandomCard() {
        const randomMapKeyValuePair = getRndInteger(0, this.#cardAmountOfSuitSchema.length - 1);
        const newCard = this.#cardAmountOfSuitSchema[randomMapKeyValuePair];
        this.#cardAmountOfSuitSchema.splice(randomMapKeyValuePair, 1);
        return new Card(newCard[0], newCard[1]);
    }
    addCard(card) {
        this.#cards.push(card);
    }
    deleteCard(card) {
        let indOfCard = 0;
        this.#cards.forEach((innerCard, ind) => {
            if (innerCard === card)
                indOfCard = ind;
        });
        this.#cards.splice(indOfCard, 1);
    }
    getCard() {
        return this.#cards[0];
    }
}
