import { Colors } from "../../../Common/Common.types";
import { FigureModel } from "../../../Modules/Figure/Figure.model";

export class CheckerKing extends FigureModel {
    constructor(figureColor: Colors) {
        super(figureColor, "checkerKing")
    }
}