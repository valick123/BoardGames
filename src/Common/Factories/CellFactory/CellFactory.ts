import { CellModel } from "../../../Modules/Cell/Cell.model";
import { ICellCords } from "../../../Modules/Cell/Cell.types";
import { Colors } from "../../Common.types";

export class CellFactory {
    public getBlackCell(cords: ICellCords): CellModel {
        return new CellModel(
            Colors.BLACK,
            cords
        );
    }
    public getWhiteCell(cords: ICellCords): CellModel {
        return new CellModel(
            Colors.WHITE,
            cords
        );
    }
}