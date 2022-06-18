import { Colors } from "../../Common/Common.types";
import { FigureModel } from "../../Modules/Figure/Figure.model";

export class CheckersFigureFactory {
    public getBlackChecker(): FigureModel {
        return new FigureModel(
            Colors.BLACK,
            "checker"
        );
    }
    public getWhiteChecker(): FigureModel {
        return new FigureModel(
            Colors.WHITE,
            "checker"
        );
    }
}