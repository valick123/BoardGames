import { ReactNode } from "react";
import { Colors } from "../../Common/Common.types";
import { SelfDrawnComponent } from "../../Common/SelfDrawnComponent";
import { Figure } from "./Figure.view";

export class FigureModel extends SelfDrawnComponent {
    protected figureColor: Colors;
    protected figuerName: string;
    constructor(figureColor: Colors, figuerName: string) {
        super();
        this.figureColor = figureColor;
        this.figuerName = figuerName;
    }
    public draw(): ReactNode {
        return (
            <Figure
                model={this}
            />
        )
    }
}