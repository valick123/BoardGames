import { ReactNode } from "react";
import { Colors } from "../../Common/Common.types";
import { SelfDrawnComponent } from "../../Common/SelfDrawnComponent";
import { FigureModel } from "../Figure/Figure.model";
import { ICellCords } from "./Cell.types";
import { Cell } from "./Cell.view";

export class CellModel extends SelfDrawnComponent {
    protected cellColor: Colors;
    protected cellFigure: FigureModel | null = null;
    protected cords: ICellCords;
    constructor(cellColor: Colors, cords: ICellCords) {
        super();
        this.cellColor = cellColor;
        this.cords = cords;
    }
    public setFigure(cellFigure: FigureModel): void {
        this.cellFigure = cellFigure;
    }
    public getCords(): ICellCords {
        return this.cords;
    }
    public draw(cellDecoration: any): ReactNode {
        return (
            <Cell
                model={this}
                cellDecoration={cellDecoration}
            />
        )
    }
}