import { Game } from "../Common/Game/Game";
import { GameSignatureDirector } from "../Common/GameSignatureBuilder/GameSignatureDirector";
import { CheckersGame } from "./Checkers/Checkers.game";
import { CheckersGameSignatureBuilder } from "./Checkers/CheckersGameSignatureBuilder";

export interface IGame {
    label: string;
    gameObj: Game;
}

export const allGames: IGame[] = [
    {
        label: "Шашки",
        gameObj: new CheckersGame(
            new CheckersGameSignatureBuilder(),
            new GameSignatureDirector()
        )
    },
    {
        label: "Шашки2",
        gameObj: new CheckersGame(
            new CheckersGameSignatureBuilder(),
            new GameSignatureDirector()
        )
    }
]