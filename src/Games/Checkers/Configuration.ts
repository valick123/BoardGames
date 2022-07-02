import { CellFactory } from "../../Common/Factories/CellFactory/CellFactory";
import { ElementsFactory } from "../../Common/Factories/ElementsFactory/ElementsFactory";
import { PlayersFactory } from "../../Common/Factories/PlayerFactory/PlayersFactory";
import { GameSignatureDirector } from "../../Common/GameSignatureBuilder/GameSignatureDirector";
import { CheckersGame } from "./Checkers.game";
import { CheckersGameSignatureBuilder } from "./Builder/CheckersGameSignatureBuilder";
import { CheckersFigureFactory } from "./Factories/CheckersFigureFactory";

export const CheckersElementsFatory: ElementsFactory = new ElementsFactory(
    new CellFactory(),
    new CheckersFigureFactory(),
    new PlayersFactory()
)

export const SignatureBuilder: CheckersGameSignatureBuilder = new CheckersGameSignatureBuilder(
    CheckersElementsFatory
)

export const SignatureDirector: GameSignatureDirector = new GameSignatureDirector(SignatureBuilder);
export const CheckersGameObj: CheckersGame = new CheckersGame(
    SignatureBuilder,
    SignatureDirector
);