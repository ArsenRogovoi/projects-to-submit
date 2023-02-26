import { drawedCards, gameDecks, specialTurn } from "../app.js";
import { Deck } from "../models/deckOfCardsModel.js";
import suitClassModel from "../models/suitClassModel.js";
import {
  DEALER_DECK,
  DEALER_DECK_AMOUNT_CARDS,
  DEALER_INSTRUCTION_CONTAINER,
  PLAYER_1_CARD_CONTAINER,
  PLAYER_1_CARD_NUM,
  PLAYER_1_CARD_SUIT_DOWN,
  PLAYER_1_CARD_SUIT_TOP,
  PLAYER_1_CARD_VALUE_DOWN,
  PLAYER_1_CARD_VALUE_TOP,
  PLAYER_1_DRAW_BTN,
  PLAYER_2_CARD_CONTAINER,
  PLAYER_2_CARD_NUM,
  PLAYER_2_CARD_SUIT_DOWN,
  PLAYER_2_CARD_SUIT_TOP,
  PLAYER_2_CARD_VALUE_DOWN,
  PLAYER_2_CARD_VALUE_TOP,
  PLAYER_2_DRAW_BTN,
  START_GAME_BTN,
} from "./domService.js";

export const startGame = () => {
  START_GAME_BTN.classList.remove("d-block");
  START_GAME_BTN.classList.add("d-none");

  gameDecks.dealerDeck = new Deck();
  gameDecks.player1Deck = new Deck("custom");
  gameDecks.player2Deck = new Deck("custom");

  DEALER_DECK.classList.remove("border-dotted");
  DEALER_DECK.classList.add("border");
  DEALER_DECK_AMOUNT_CARDS.innerText = gameDecks.dealerDeck
    .getAmountOfCards()
    .toString();

  DEALER_INSTRUCTION_CONTAINER.innerText = `The deck of cards has been shuffled`;

  setTimeout(() => {
    DEALER_INSTRUCTION_CONTAINER.innerText = `Turn of player 1`;
    PLAYER_1_DRAW_BTN.classList.remove("d-none");
    PLAYER_1_DRAW_BTN.classList.add("d-block");
  }, 2000);
};

export const turnOfPlayer1 = () => {
  if (specialTurn.isSpecialTurn) {
    if (gameDecks.dealerDeck!.hasCard()) {
      if (
        specialTurn.numOfSpecialTurn === 3 ||
        gameDecks.player1Deck?.hasLastCard() ||
        gameDecks.player2Deck?.hasLastCard()
      ) {
        const rndDealerCard = gameDecks.dealerDeck!.getRandomCard();
        drawedCards.p1.push(rndDealerCard!);
        renderDrawnedCard("p1", true);
      } else {
        const rndDealerCard = gameDecks.dealerDeck!.getRandomCard();
        drawedCards.p1.push(rndDealerCard!);
        renderDrawnedCard("p1", false);
      }
      PLAYER_1_DRAW_BTN.classList.remove("d-block");
      PLAYER_1_DRAW_BTN.classList.add("d-none");
      PLAYER_2_DRAW_BTN.classList.remove("d-none");
      PLAYER_2_DRAW_BTN.classList.add("d-block");
    } else {
      if (
        specialTurn.numOfSpecialTurn === 3 ||
        gameDecks.player1Deck?.hasLastCard() ||
        gameDecks.player2Deck?.hasLastCard()
      ) {
        const rndPlayerCard = gameDecks.player1Deck!.getRandomCard();
        drawedCards.p1.push(rndPlayerCard!);
        renderDrawnedCard("p1", true);
      } else {
        const rndPlayerCard = gameDecks.player1Deck!.getRandomCard();
        drawedCards.p1.push(rndPlayerCard!);
        renderDrawnedCard("p1", false);
      }
      PLAYER_1_DRAW_BTN.classList.remove("d-block");
      PLAYER_1_DRAW_BTN.classList.add("d-none");
      PLAYER_2_DRAW_BTN.classList.remove("d-none");
      PLAYER_2_DRAW_BTN.classList.add("d-block");
    }
  } else {
    if (gameDecks.dealerDeck?.hasCard()) {
      const rndDealerCard = gameDecks.dealerDeck!.getRandomCard();
      drawedCards.p1.push(rndDealerCard!);
    } else {
      const rndPlayerCard = gameDecks.player1Deck!.getRandomCard();
      drawedCards.p1.push(rndPlayerCard!);
    }
    renderDrawnedCard("p1", true);
    PLAYER_1_DRAW_BTN.classList.remove("d-block");
    PLAYER_1_DRAW_BTN.classList.add("d-none");
    PLAYER_2_DRAW_BTN.classList.remove("d-none");
    PLAYER_2_DRAW_BTN.classList.add("d-block");
  }
};

export const turnOfPlayer2 = () => {
  if (specialTurn.isSpecialTurn) {
    if (gameDecks.dealerDeck!.hasCard()) {
      if (
        specialTurn.numOfSpecialTurn === 3 ||
        gameDecks.player1Deck?.hasLastCard() ||
        gameDecks.player2Deck?.hasLastCard()
      ) {
        const rndDealerCard = gameDecks.dealerDeck!.getRandomCard();
        drawedCards.p2.push(rndDealerCard!);
        renderDrawnedCard("p2", true);
        PLAYER_2_DRAW_BTN.classList.remove("d-block");
        PLAYER_2_DRAW_BTN.classList.add("d-none");
        whichCardIsBigger();
        specialTurn.isSpecialTurn = false;
      } else {
        const rndDealerCard = gameDecks.dealerDeck!.getRandomCard();
        drawedCards.p2.push(rndDealerCard!);
        renderDrawnedCard("p2", false);
        PLAYER_2_DRAW_BTN.classList.remove("d-block");
        PLAYER_2_DRAW_BTN.classList.add("d-none");
        turnOfPlayer1();
      }
    } else {
      if (
        specialTurn.numOfSpecialTurn === 3 ||
        gameDecks.player1Deck?.hasLastCard() ||
        gameDecks.player2Deck?.hasLastCard()
      ) {
        const rndPlayerCard = gameDecks.player2Deck!.getRandomCard();
        drawedCards.p2.push(rndPlayerCard!);
        renderDrawnedCard("p2", true);
        PLAYER_2_DRAW_BTN.classList.remove("d-block");
        PLAYER_2_DRAW_BTN.classList.add("d-none");
        whichCardIsBigger();
        specialTurn.isSpecialTurn = false;
      } else {
        const rndPlayerCard = gameDecks.player2Deck!.getRandomCard();
        drawedCards.p2.push(rndPlayerCard!);
        renderDrawnedCard("p2", false);
        PLAYER_2_DRAW_BTN.classList.remove("d-block");
        PLAYER_2_DRAW_BTN.classList.add("d-none");
        turnOfPlayer1();
      }
    }
    specialTurn.numOfSpecialTurn++;
  } else {
    if (gameDecks.dealerDeck?.hasCard()) {
      const rndDealerCard = gameDecks.dealerDeck!.getRandomCard();
      drawedCards.p2.push(rndDealerCard!);
    } else {
      const rndPlayerCard = gameDecks.player2Deck!.getRandomCard();
      drawedCards.p2.push(rndPlayerCard!);
    }
    renderDrawnedCard("p2", true);
    PLAYER_2_DRAW_BTN.classList.remove("d-block");
    PLAYER_2_DRAW_BTN.classList.add("d-none");
    whichCardIsBigger();
  }
};

const renderDrawnedCard = (p: "p1" | "p2", toShow: boolean) => {
  const suit = drawedCards[p][drawedCards[p].length - 1].suit;
  const value = drawedCards[p][drawedCards[p].length - 1].value;
  const numOfDrawedCards = drawedCards[p].length;
  if (p === "p1") {
    if (toShow) {
      PLAYER_1_CARD_CONTAINER.classList.remove("border-dotted");
      PLAYER_1_CARD_CONTAINER.classList.add("border");
      PLAYER_1_CARD_NUM.innerText = `X ${numOfDrawedCards}`;
      PLAYER_1_CARD_SUIT_TOP.className = `${suitClassModel.get(suit)}`;
      PLAYER_1_CARD_VALUE_TOP.innerText = `${value}`;
      PLAYER_1_CARD_SUIT_DOWN.className = `${suitClassModel.get(suit)}`;
      PLAYER_1_CARD_VALUE_DOWN.innerText = `${value}`;
    } else {
      PLAYER_1_CARD_CONTAINER.classList.remove("border-dotted");
      PLAYER_1_CARD_CONTAINER.classList.add("border");
      PLAYER_1_CARD_CONTAINER.classList.add("backOfDeck");
      PLAYER_1_CARD_NUM.innerText = `X ${numOfDrawedCards}`;
    }
  } else {
    if (toShow) {
      PLAYER_2_CARD_CONTAINER.classList.remove("border-dotted");
      PLAYER_2_CARD_CONTAINER.classList.add("border");
      PLAYER_2_CARD_NUM.innerText = `X ${numOfDrawedCards}`;
      PLAYER_2_CARD_SUIT_TOP.className = `${suitClassModel.get(suit)}`;
      PLAYER_2_CARD_VALUE_TOP.innerText = `${value}`;
      PLAYER_2_CARD_SUIT_DOWN.className = `${suitClassModel.get(suit)}`;
      PLAYER_2_CARD_VALUE_DOWN.innerText = `${value}`;
    } else {
      PLAYER_2_CARD_CONTAINER.classList.remove("border-dotted");
      PLAYER_2_CARD_CONTAINER.classList.add("border");
      PLAYER_2_CARD_CONTAINER.classList.add("backOfDeck");
      PLAYER_2_CARD_NUM.innerText = `X ${numOfDrawedCards}`;
    }
  }
};

export const whichCardIsBigger = () => {};

export const stopGame = () => {};
