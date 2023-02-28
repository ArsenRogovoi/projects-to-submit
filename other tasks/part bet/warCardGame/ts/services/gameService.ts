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
  PLAYER_1_DECK,
  PLAYER_1_DECK_AMOUNT_CARDS,
  PLAYER_1_DRAW_BTN,
  PLAYER_1_NAME,
  PLAYER_2_CARD_CONTAINER,
  PLAYER_2_CARD_NUM,
  PLAYER_2_CARD_SUIT_DOWN,
  PLAYER_2_CARD_SUIT_TOP,
  PLAYER_2_CARD_VALUE_DOWN,
  PLAYER_2_CARD_VALUE_TOP,
  PLAYER_2_DECK,
  PLAYER_2_DECK_AMOUNT_CARDS,
  PLAYER_2_DRAW_BTN,
  PLAYER_2_NAME,
  START_GAME_BTN,
} from "./domService.js";

export const startGame = () => {
  PLAYER_1_NAME.classList.remove("winner");
  PLAYER_2_NAME.classList.remove("winner");
  PLAYER_1_DECK.classList.remove("backOfDeck", "border");
  PLAYER_1_DECK.classList.add("border-dotted");
  PLAYER_2_DECK.classList.remove("backOfDeck", "border");
  PLAYER_2_DECK.classList.add("border-dotted");

  START_GAME_BTN.classList.remove("d-block");
  START_GAME_BTN.classList.add("d-none");

  gameDecks.dealerDeck = new Deck();
  gameDecks.player1Deck = new Deck("custom");
  gameDecks.player2Deck = new Deck("custom");

  renderDealerDeck();

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
        specialTurn.numOfSpecialTurn === 2 ||
        gameDecks.player1Deck?.hasLastCard() ||
        gameDecks.player2Deck?.hasLastCard()
      ) {
        const rndDealerCard = gameDecks.dealerDeck!.getRandomCard();
        gameDecks.dealerDeck?.deleteCard(rndDealerCard!);
        drawedCards.p1.push(rndDealerCard!);
        renderDrawnedCard("p1", true);
      } else {
        const rndDealerCard = gameDecks.dealerDeck!.getRandomCard();
        gameDecks.dealerDeck?.deleteCard(rndDealerCard!);
        drawedCards.p1.push(rndDealerCard!);
        renderDrawnedCard("p1", false);
      }
      PLAYER_1_DRAW_BTN.classList.remove("d-block");
      PLAYER_1_DRAW_BTN.classList.add("d-none");
      DEALER_INSTRUCTION_CONTAINER.innerText = `Turn of player 2`;
      setTimeout(() => {
        PLAYER_2_DRAW_BTN.classList.remove("d-none");
        PLAYER_2_DRAW_BTN.classList.add("d-block");
      }, 2_000);
    } else {
      if (
        specialTurn.numOfSpecialTurn === 2 ||
        gameDecks.player1Deck?.hasLastCard() ||
        gameDecks.player2Deck?.hasLastCard()
      ) {
        const rndPlayerCard = gameDecks.player1Deck!.getRandomCard();
        gameDecks.player1Deck?.deleteCard(rndPlayerCard!);
        PLAYER_1_DECK_AMOUNT_CARDS.innerText = `${gameDecks.player1Deck?.getAmountOfCards()}`;
        drawedCards.p1.push(rndPlayerCard!);
        renderDrawnedCard("p1", true);
      } else {
        const rndPlayerCard = gameDecks.player1Deck!.getRandomCard();
        gameDecks.player1Deck?.deleteCard(rndPlayerCard!);
        PLAYER_1_DECK_AMOUNT_CARDS.innerText = `${gameDecks.player1Deck?.getAmountOfCards()}`;
        drawedCards.p1.push(rndPlayerCard!);
        renderDrawnedCard("p1", false);
      }
      PLAYER_1_DRAW_BTN.classList.remove("d-block");
      PLAYER_1_DRAW_BTN.classList.add("d-none");
      DEALER_INSTRUCTION_CONTAINER.innerText = `Turn of player 2`;
      setTimeout(() => {
        PLAYER_2_DRAW_BTN.classList.remove("d-none");
        PLAYER_2_DRAW_BTN.classList.add("d-block");
      }, 2_000);
    }
  } else {
    if (gameDecks.dealerDeck?.hasCard()) {
      const rndDealerCard = gameDecks.dealerDeck!.getRandomCard();
      gameDecks.dealerDeck?.deleteCard(rndDealerCard!);
      drawedCards.p1.push(rndDealerCard!);
    } else {
      const rndPlayerCard = gameDecks.player1Deck!.getRandomCard();
      gameDecks.player1Deck?.deleteCard(rndPlayerCard!);
      PLAYER_1_DECK_AMOUNT_CARDS.innerText = `${gameDecks.player1Deck?.getAmountOfCards()}`;
      drawedCards.p1.push(rndPlayerCard!);
    }
    renderDrawnedCard("p1", true);
    PLAYER_1_DRAW_BTN.classList.remove("d-block");
    PLAYER_1_DRAW_BTN.classList.add("d-none");
    DEALER_INSTRUCTION_CONTAINER.innerText = `Turn of player 2`;
    setTimeout(() => {
      PLAYER_2_DRAW_BTN.classList.remove("d-none");
      PLAYER_2_DRAW_BTN.classList.add("d-block");
    }, 2_000);
  }
  renderDealerDeck();
};

export const turnOfPlayer2 = () => {
  if (specialTurn.isSpecialTurn) {
    if (gameDecks.dealerDeck!.hasCard()) {
      if (
        specialTurn.numOfSpecialTurn === 2 ||
        gameDecks.player1Deck?.hasLastCard() ||
        gameDecks.player2Deck?.hasLastCard()
      ) {
        const rndDealerCard = gameDecks.dealerDeck!.getRandomCard();
        gameDecks.dealerDeck?.deleteCard(rndDealerCard!);
        drawedCards.p2.push(rndDealerCard!);
        renderDrawnedCard("p2", true);
        PLAYER_2_DRAW_BTN.classList.remove("d-block");
        PLAYER_2_DRAW_BTN.classList.add("d-none");
        whichCardIsBigger();
        specialTurn.isSpecialTurn = false;
        specialTurn.numOfSpecialTurn = 0;
      } else {
        const rndDealerCard = gameDecks.dealerDeck!.getRandomCard();
        gameDecks.dealerDeck?.deleteCard(rndDealerCard!);
        drawedCards.p2.push(rndDealerCard!);
        renderDrawnedCard("p2", false);
        PLAYER_2_DRAW_BTN.classList.remove("d-block");
        PLAYER_2_DRAW_BTN.classList.add("d-none");
        DEALER_INSTRUCTION_CONTAINER.innerText = `Turn of player 1`;
        setTimeout(() => {
          PLAYER_1_DRAW_BTN.classList.remove("d-none");
          PLAYER_1_DRAW_BTN.classList.add("d-block");
        }, 2_000);
        specialTurn.numOfSpecialTurn++;
      }
    } else {
      if (
        specialTurn.numOfSpecialTurn === 2 ||
        gameDecks.player1Deck?.hasLastCard() ||
        gameDecks.player2Deck?.hasLastCard()
      ) {
        const rndPlayerCard = gameDecks.player2Deck!.getRandomCard();
        gameDecks.player2Deck?.deleteCard(rndPlayerCard!);
        PLAYER_2_DECK_AMOUNT_CARDS.innerText = `${gameDecks.player2Deck?.getAmountOfCards()}`;
        drawedCards.p2.push(rndPlayerCard!);
        renderDrawnedCard("p2", true);
        PLAYER_2_DRAW_BTN.classList.remove("d-block");
        PLAYER_2_DRAW_BTN.classList.add("d-none");
        whichCardIsBigger();
        specialTurn.isSpecialTurn = false;
        specialTurn.numOfSpecialTurn = 0;
      } else {
        const rndPlayerCard = gameDecks.player2Deck!.getRandomCard();
        gameDecks.player2Deck?.deleteCard(rndPlayerCard!);
        PLAYER_2_DECK_AMOUNT_CARDS.innerText = `${gameDecks.player2Deck?.getAmountOfCards()}`;
        drawedCards.p2.push(rndPlayerCard!);
        renderDrawnedCard("p2", false);
        PLAYER_2_DRAW_BTN.classList.remove("d-block");
        PLAYER_2_DRAW_BTN.classList.add("d-none");
        DEALER_INSTRUCTION_CONTAINER.innerText = `Turn of player 1`;
        setTimeout(() => {
          PLAYER_1_DRAW_BTN.classList.remove("d-none");
          PLAYER_1_DRAW_BTN.classList.add("d-block");
        }, 2_000);
        specialTurn.numOfSpecialTurn++;
      }
    }
  } else {
    if (gameDecks.dealerDeck?.hasCard()) {
      const rndDealerCard = gameDecks.dealerDeck!.getRandomCard();
      gameDecks.dealerDeck?.deleteCard(rndDealerCard!);
      drawedCards.p2.push(rndDealerCard!);
    } else {
      const rndPlayerCard = gameDecks.player2Deck!.getRandomCard();
      gameDecks.player2Deck?.deleteCard(rndPlayerCard!);
      PLAYER_2_DECK_AMOUNT_CARDS.innerText = `${gameDecks.player2Deck?.getAmountOfCards()}`;
      drawedCards.p2.push(rndPlayerCard!);
    }
    renderDrawnedCard("p2", true);
    PLAYER_2_DRAW_BTN.classList.remove("d-block");
    PLAYER_2_DRAW_BTN.classList.add("d-none");
    whichCardIsBigger();
  }
  renderDealerDeck();
};

const renderDrawnedCard = (p: "p1" | "p2", toShow: boolean) => {
  const suit = drawedCards[p][drawedCards[p].length - 1].suit;
  const value = drawedCards[p][drawedCards[p].length - 1].value;
  const numOfDrawedCards = drawedCards[p].length;
  if (p === "p1") {
    if (toShow) {
      PLAYER_1_CARD_CONTAINER.classList.remove("border-dotted", "backOfDeck");
      PLAYER_1_CARD_CONTAINER.classList.add("border");
      PLAYER_1_CARD_NUM.innerText = `X ${numOfDrawedCards}`;
      PLAYER_1_CARD_SUIT_TOP.className = `${suitClassModel.get(suit)}`;
      PLAYER_1_CARD_VALUE_TOP.innerText = `${renderSymbolOfValue(value)}`;
      PLAYER_1_CARD_SUIT_DOWN.className = `${suitClassModel.get(suit)}`;
      PLAYER_1_CARD_VALUE_DOWN.innerText = `${renderSymbolOfValue(value)}`;
    } else {
      PLAYER_1_CARD_CONTAINER.classList.remove("border-dotted");
      PLAYER_1_CARD_CONTAINER.classList.add("border", "backOfDeck");
      PLAYER_1_CARD_NUM.innerText = `X ${numOfDrawedCards}`;

      PLAYER_1_CARD_SUIT_TOP.className = ``;
      PLAYER_1_CARD_VALUE_TOP.innerText = ``;
      PLAYER_1_CARD_SUIT_DOWN.className = ``;
      PLAYER_1_CARD_VALUE_DOWN.innerText = ``;
    }
  } else {
    if (toShow) {
      PLAYER_2_CARD_CONTAINER.classList.remove("border-dotted", "backOfDeck");
      PLAYER_2_CARD_CONTAINER.classList.add("border");
      PLAYER_2_CARD_NUM.innerText = `X ${numOfDrawedCards}`;
      PLAYER_2_CARD_SUIT_TOP.className = `${suitClassModel.get(suit)}`;
      PLAYER_2_CARD_VALUE_TOP.innerText = `${renderSymbolOfValue(value)}`;
      PLAYER_2_CARD_SUIT_DOWN.className = `${suitClassModel.get(suit)}`;
      PLAYER_2_CARD_VALUE_DOWN.innerText = `${renderSymbolOfValue(value)}`;
    } else {
      PLAYER_2_CARD_CONTAINER.classList.remove("border-dotted");
      PLAYER_2_CARD_CONTAINER.classList.add("border", "backOfDeck");
      PLAYER_2_CARD_NUM.innerText = `X ${numOfDrawedCards}`;

      PLAYER_2_CARD_SUIT_TOP.className = ``;
      PLAYER_2_CARD_VALUE_TOP.innerText = ``;
      PLAYER_2_CARD_SUIT_DOWN.className = ``;
      PLAYER_2_CARD_VALUE_DOWN.innerText = ``;
    }
  }
};

const whichCardIsBigger = () => {
  const cardOfPlayer1 = drawedCards.p1[drawedCards.p1.length - 1];
  const cardOfPlayer2 = drawedCards.p2[drawedCards.p2.length - 1];
  if (cardOfPlayer1.value > cardOfPlayer2.value) {
    DEALER_INSTRUCTION_CONTAINER.innerText = "Player 1 takes all the cards";
    setTimeout(() => {
      PLAYER_1_NAME.classList.add("winner");
      setTimeout(() => {
        PLAYER_1_NAME.classList.remove("winner");
      }, 2_000);

      drawedCards.p1.forEach((card) => {
        gameDecks.player1Deck?.addCard(card);
      });
      drawedCards.p2.forEach((card) => {
        gameDecks.player1Deck?.addCard(card);
      });
      drawedCards.p1 = [];
      drawedCards.p2 = [];

      cleanCardContainers();
      doWeHaveWinner();
    }, 1_000);
  } else {
    if (cardOfPlayer1.value < cardOfPlayer2.value) {
      DEALER_INSTRUCTION_CONTAINER.innerText = "Player 2 takes all the cards";
      setTimeout(() => {
        PLAYER_2_NAME.classList.add("winner");
        setTimeout(() => {
          PLAYER_2_NAME.classList.remove("winner");
        }, 2_000);

        drawedCards.p1.forEach((card) => {
          gameDecks.player2Deck?.addCard(card);
        });
        drawedCards.p2.forEach((card) => {
          gameDecks.player2Deck?.addCard(card);
        });
        drawedCards.p1 = [];
        drawedCards.p2 = [];

        cleanCardContainers();
        doWeHaveWinner();
      }, 1_000);
    } else {
      if (cardOfPlayer1.value === cardOfPlayer2.value) {
        if (
          (!gameDecks.player1Deck?.hasCard() ||
            !gameDecks.player2Deck?.hasCard()) &&
          !gameDecks.dealerDeck?.hasCard()
        ) {
          doWeHaveWinner();
        } else {
          specialTurn.isSpecialTurn = true;
          specialTurn.numOfSpecialTurn = 0;
          DEALER_INSTRUCTION_CONTAINER.innerText = `The same value of the cards. 
        Each player will draw three more cards and show the last card.`;
          setTimeout(() => {
            DEALER_INSTRUCTION_CONTAINER.innerText = "Player 1 turn";
            setTimeout(() => {
              PLAYER_1_DRAW_BTN.classList.remove("d-none");
              PLAYER_1_DRAW_BTN.classList.add("d-block");
            }, 1_000);
          }, 2_000);
        }
      }
    }
  }
};

const doWeHaveWinner = () => {
  if (
    (gameDecks.player1Deck?.hasCard() && gameDecks.player2Deck?.hasCard()) ||
    (gameDecks.player1Deck?.hasCard() && gameDecks.dealerDeck?.hasCard()) ||
    (gameDecks.dealerDeck?.hasCard() && gameDecks.player2Deck?.hasCard())
  ) {
    DEALER_INSTRUCTION_CONTAINER.innerText = "Player 1 turn";
    setTimeout(() => {
      PLAYER_1_DRAW_BTN.classList.remove("d-none");
      PLAYER_1_DRAW_BTN.classList.add("d-block");
    }, 2_000);
  } else {
    if (!gameDecks.player1Deck?.hasCard() && !gameDecks.dealerDeck?.hasCard()) {
      // player 2 won
      DEALER_INSTRUCTION_CONTAINER.innerText = "Player 2 WON!";
      PLAYER_2_NAME.classList.add("winner");
      setTimeout(() => {
        stopGame();
      }, 3_000);
    } else {
      if (
        !gameDecks.player2Deck?.hasCard() &&
        !gameDecks.dealerDeck?.hasCard()
      ) {
        //player 1 won
        DEALER_INSTRUCTION_CONTAINER.innerText = "Player 1 WON!";
        PLAYER_1_NAME.classList.add("winner");
        setTimeout(() => {
          stopGame();
        }, 3_000);
      }
    }
  }
};

const stopGame = () => {
  DEALER_INSTRUCTION_CONTAINER.innerText =
    "Game Over. Do you want to play one more game?";
  START_GAME_BTN.classList.remove("d-none");
  START_GAME_BTN.classList.add("d-block");
};

const cleanCardContainers = () => {
  setTimeout(() => {
    if (gameDecks.player1Deck?.hasCard()) {
      PLAYER_1_DECK.classList.remove("border-dotted");
      PLAYER_1_DECK.classList.add("border", "backOfDeck");
      PLAYER_1_DECK_AMOUNT_CARDS.innerText = `${gameDecks.player1Deck?.getAmountOfCards()}`;
    } else {
      PLAYER_1_DECK.classList.remove("border", "backOfDeck");
      PLAYER_1_DECK.classList.add("border-dotted");
      PLAYER_1_DECK_AMOUNT_CARDS.innerText = `${gameDecks.player1Deck?.getAmountOfCards()}`;
    }
    PLAYER_1_CARD_CONTAINER.classList.remove("border");
    PLAYER_1_CARD_CONTAINER.classList.add("border-dotted");
    PLAYER_1_CARD_NUM.innerText = ``;
    PLAYER_1_CARD_SUIT_TOP.className = "";
    PLAYER_1_CARD_SUIT_DOWN.className = "";
    PLAYER_1_CARD_VALUE_TOP.innerText = "";
    PLAYER_1_CARD_VALUE_DOWN.innerText = "";

    if (gameDecks.player2Deck?.hasCard()) {
      PLAYER_2_DECK.classList.remove("border-dotted");
      PLAYER_2_DECK.classList.add("border", "backOfDeck");
      PLAYER_2_DECK_AMOUNT_CARDS.innerText = `${gameDecks.player2Deck?.getAmountOfCards()}`;
    } else {
      PLAYER_2_DECK.classList.remove("border", "backOfDeck");
      PLAYER_2_DECK.classList.add("border-dotted");
      PLAYER_2_DECK_AMOUNT_CARDS.innerText = `${gameDecks.player2Deck?.getAmountOfCards()}`;
    }
    PLAYER_2_CARD_CONTAINER.classList.remove("border");
    PLAYER_2_CARD_CONTAINER.classList.add("border-dotted");
    PLAYER_2_CARD_NUM.innerText = ``;
    PLAYER_2_CARD_SUIT_TOP.className = "";
    PLAYER_2_CARD_SUIT_DOWN.className = "";
    PLAYER_2_CARD_VALUE_TOP.innerText = "";
    PLAYER_2_CARD_VALUE_DOWN.innerText = "";
  }, 1_000);
};

const renderDealerDeck = () => {
  if (gameDecks.dealerDeck?.hasCard()) {
    DEALER_DECK.classList.remove("border-dotted");
    DEALER_DECK.classList.add("border", "backOfDeck");
    DEALER_DECK_AMOUNT_CARDS.innerText = `${gameDecks.dealerDeck.getAmountOfCards()}`;
  } else {
    DEALER_DECK.classList.remove("border", "backOfDeck");
    DEALER_DECK.classList.add("border-dotted");
    DEALER_DECK_AMOUNT_CARDS.innerText = `${gameDecks.dealerDeck?.getAmountOfCards()}`;
  }
};

const renderSymbolOfValue = (value: number): string => {
  switch (value) {
    case 1:
      return "A";

    case 11:
      return "J";

    case 12:
      return "Q";

    case 13:
      return "K";

    default:
      return `${value}`;
      break;
  }
};

// remove backOfDeck class when amount of cards in the deck equel to 0
