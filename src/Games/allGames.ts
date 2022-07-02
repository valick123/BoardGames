import { Game } from "../Common/Game/Game";
import { CheckersGameObj } from "./Checkers/Configuration";

export interface IGame {
    label: string;
    gameObj: Game;
}

export const allGames: IGame[] = [
    {
        label: "Шашки",
        gameObj: CheckersGameObj
    },
    {
        label: "Шашки2",
        gameObj: CheckersGameObj
    }
]