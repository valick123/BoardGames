import { CellFactory } from "../Common/Factories/CellFactory/CellFactory";
import { ElementsFactory } from "../Common/Factories/ElementsFactory/ElementsFactory";
import { PlayersFactory } from "../Common/Factories/PlayerFactory/PlayersFactory";
import { Game } from "../Common/Game/Game";
import { GameSignatureDirector } from "../Common/GameSignatureBuilder/GameSignatureDirector";
import { CheckersGame } from "./Checkers/Checkers.game";
import { CheckersFigureFactory } from "./Checkers/CheckersFigureFactory";
import { CheckersGameSignatureBuilder } from "./Checkers/CheckersGameSignatureBuilder";

export interface IGame {
    label: string;
    gameObj: Game;
}

export const allGames: IGame[] = [
    {
        label: "Шашки",
        gameObj: new CheckersGame(
            new CheckersGameSignatureBuilder(
                new ElementsFactory(
                    new CellFactory(),
                    new CheckersFigureFactory(),
                    new PlayersFactory()
                )
            ),
            new GameSignatureDirector()
        )
    },
    {
        label: "Шашки2",
        gameObj: new CheckersGame(
            new CheckersGameSignatureBuilder(
                new ElementsFactory(
                    new CellFactory(),
                    new CheckersFigureFactory(),
                    new PlayersFactory()
                )
            ),
            new GameSignatureDirector()
        )
    }
]