import { CellModel } from "../../../Modules/Cell/Cell.model";
import { FigureModel } from "../../../Modules/Figure/Figure.model";
import { Colors } from "../../Common.types";
import { ICellCords } from "../../Game/Game.types";

export class CellFactory {
    public getCell(cellColor: Colors, cellCords: ICellCords, cellFigure: FigureModel | null): CellModel {
        return new CellModel(
            cellColor,
            cellCords,
            cellFigure
        );
    }
}