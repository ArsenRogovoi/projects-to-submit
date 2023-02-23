import { cardSuit, cardValue } from "../types.js";

export class Card {
  suit;
  value;
  constructor(suit: cardSuit, value: cardValue) {
    this.suit = suit;
    this.value = value;
  }
}
