import { Colors } from "../../Common/Common.types";
import { FigureFacotry } from "../../Common/Factories/FigureFactory/FigureFactory";
import { FigureModel } from "../../Modules/Figure/Figure.model";

export class CheckersFigureFactory extends FigureFacotry {
    public getFigure(figureColor: Colors, figuerName: string): FigureModel {
        return new FigureModel(figureColor, figuerName);
    }
}