import { gameDecks } from "../app.js";
import { GAME_STATE } from "../models/gameStatesModel.js";
import { suitClassModel } from "../models/suitClassModel.js";
import { DEALER_INSTRUCTION_CONTAINER, PLAYER_1_CARD_SUIT_DOWN, PLAYER_1_CARD_SUIT_TOP, PLAYER_1_CARD_VALUE_DOWN, PLAYER_1_CARD_VALUE_TOP, PLAYER_1_DRAW_BTN, PLAYER_2_CARD_SUIT_DOWN, PLAYER_2_CARD_SUIT_TOP, PLAYER_2_CARD_VALUE_DOWN, PLAYER_2_CARD_VALUE_TOP, START_GAME_BTN, } from "./domService.js";
const drawnedCards = {
    p1: [],
    p2: [],
};
export const dealerProtocol = (state) => {
    switch (state) {
        case GAME_STATE.START:
            startGame();
            break;
        case GAME_STATE.P1_TURN:
            PLAYER_1_DRAW_BTN.classList.remove("d-none");
            PLAYER_1_DRAW_BTN.classList.add("d-block");
            break;
        case GAME_STATE.P2_TURN:
            break;
        case GAME_STATE.END:
            break;
        default:
            break;
    }
};
const startGame = () => {
    START_GAME_BTN.classList.remove("d-block");
    START_GAME_BTN.classList.add("d-none");
    DEALER_INSTRUCTION_CONTAINER.innerText = `The deck of cards has been shuffled`;
    setTimeout(() => {
        DEALER_INSTRUCTION_CONTAINER.innerText = `Turn of player 1`;
        dealerProtocol(GAME_STATE.P1_TURN);
    }, 3000);
};
export const turnOfPlayer1 = () => {
    const drawnedCard = gameDecks.dealerDeck.getCard();
    gameDecks.dealerDeck.deleteCard(drawnedCard);
    drawnedCards.p1.push(drawnedCard);
    renderDrawnedCard();
};
const renderDrawnedCard = () => {
    if (drawnedCards.p1) {
        const suit = drawnedCards.p1[drawnedCards.p1.length - 1].suit;
        const value = drawnedCards.p1[drawnedCards.p1.length - 1].value;
        PLAYER_1_CARD_SUIT_TOP.className = `${suitClassModel[suit]}`;
        PLAYER_1_CARD_VALUE_TOP.innerText = `${value}`;
        PLAYER_1_CARD_SUIT_DOWN.className = `${suitClassModel[suit]}`;
        PLAYER_1_CARD_VALUE_DOWN.innerText = `${value}`;
    }
    if (drawnedCards.p2) {
        const suit = drawnedCards.p2[drawnedCards.p2.length - 1].suit;
        const value = drawnedCards.p2[drawnedCards.p2.length - 1].value;
        PLAYER_2_CARD_SUIT_TOP.className = `${suitClassModel[suit]}`;
        PLAYER_2_CARD_VALUE_TOP.innerText = `${value}`;
        PLAYER_2_CARD_SUIT_DOWN.className = `${suitClassModel[suit]}`;
        PLAYER_2_CARD_VALUE_DOWN.innerText = `${value}`;
    }
};
export const stopGame = () => { };
