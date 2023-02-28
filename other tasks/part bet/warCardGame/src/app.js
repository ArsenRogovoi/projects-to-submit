import { GAME_CONTAINER, PAGE_HEADING, PLAYER_1_DRAW_BTN, PLAYER_2_DRAW_BTN, START_GAME_BTN, } from "./services/domService.js";
import { startGame, turnOfPlayer1, turnOfPlayer2, } from "./services/gameService.js";
import { fitHeight } from "./utils/algoMethods.js";
fitHeight(GAME_CONTAINER, [PAGE_HEADING]);
export const gameDecks = {
    dealerDeck: undefined,
    player1Deck: undefined,
    player2Deck: undefined,
};
export const drawedCards = {
    p1: [],
    p2: [],
};
export const specialTurn = {
    isSpecialTurn: false,
    numOfSpecialTurn: 0,
};
START_GAME_BTN.addEventListener("click", startGame);
PLAYER_1_DRAW_BTN.addEventListener("click", turnOfPlayer1);
PLAYER_2_DRAW_BTN.addEventListener("click", turnOfPlayer2);
