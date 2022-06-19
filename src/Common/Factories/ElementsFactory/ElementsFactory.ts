import { CellFactory } from "../CellFactory/CellFactory";
import { FigureFacotry } from "../FigureFactory/FigureFactory";
import { PlayersFactory } from "../PlayerFactory/PlayersFactory";

export class ElementsFactory {
    constructor(
        public cellFactory: CellFactory,
        public figureFactory: FigureFacotry,
        public playersFactory: PlayersFactory
    ) {

    }
}