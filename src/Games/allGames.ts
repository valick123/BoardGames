import { Game } from "../Common/Game";
import { CheckersGame } from "./Checkers.game";

export interface IGame {
    label: string;
    gameObj: Game;
}

export const allGames: IGame[] = [
    {
        label: "Шашки",
        gameObj: CheckersGame
    },
    {
        label: "Шашки2",
        gameObj: CheckersGame
    }
]