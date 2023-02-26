import { Card } from "./models/cardModel.js";
import { Deck } from "./models/deckOfCardsModel.js";

export enum cardValue {
  A = 1,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE,
  TEN,
  J,
  Q,
  K,
}

export enum cardSuit {
  HART,
  DIMOND,
  CLUB,
  SPADE,
}

export interface gameDecksObj {
  dealerDeck: Deck | undefined;
  player1Deck: Deck | undefined;
  player2Deck: Deck | undefined;
}

export interface drawnedCardsObj {
  p1: Card[];
  p2: Card[];
}
