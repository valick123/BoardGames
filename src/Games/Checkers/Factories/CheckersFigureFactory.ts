import { Colors } from "../../../Common/Common.types";
import { FigureFacotry } from "../../../Common/Factories/FigureFactory/FigureFactory";
import { FigureModel } from "../../../Modules/Figure/Figure.model";
import { CheckerMan } from "../Figures/CheckerMan.figure";
import { CheckerKing } from "../Figures/CheckerKing.figure";

export class CheckersFigureFactory extends FigureFacotry {
    public getFigure(figureColor: Colors, figuerName: string): FigureModel {
        switch (figuerName) {
            case "checkerKing": {
                return new CheckerKing(figureColor);
            }
            default: {
                return new CheckerMan(figureColor);
            }
        }
    }
}