import { FigureModel } from "../../../Modules/Figure/Figure.model";
import { Colors } from "../../Common.types";

export abstract class FigureFacotry {
    public abstract getFigure(figureColor: Colors, figuerName: string): FigureModel;
}