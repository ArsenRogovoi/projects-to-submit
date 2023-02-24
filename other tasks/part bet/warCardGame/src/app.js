import { Deck } from "./models/deckOfCardsModel.js";
import { GAME_STATE } from "./models/gameStatesModel.js";
import { GAME_CONTAINER, PAGE_HEADING, PLAYER_1_DRAW_BTN, START_GAME_BTN, } from "./services/domService.js";
import { dealerProtocol, turnOfPlayer1 } from "./services/gameService.js";
import { fitHeight } from "./utils/algoMethods.js";
fitHeight(GAME_CONTAINER, [PAGE_HEADING]);
export const gameDecks = {
    dealerDeck: new Deck(),
    player1Deck: new Deck("custom"),
    player2Deck: new Deck("custom"),
};
START_GAME_BTN.addEventListener("click", () => {
    dealerProtocol(GAME_STATE.START);
});
PLAYER_1_DRAW_BTN.addEventListener("click", turnOfPlayer1);
