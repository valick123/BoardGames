import { ReactNode } from "react";
import { Colors } from "../../Common/Common.types";
import { ICellCords } from "../../Common/Game/Game.types";
import { SelfDrawnComponent } from "../../Common/SelfDrawnComponent";
import { FigureModel } from "../Figure/Figure.model";
import { Cell } from "./Cell.view";

export class CellModel extends SelfDrawnComponent {
    protected cellColor: Colors;
    protected cellFigure: FigureModel | null;
    protected cellCords: ICellCords;
    constructor(color: Colors, cords: ICellCords, figure: FigureModel | null) {
        super();
        this.cellColor = color;
        this.cellCords = cords;
        this.cellFigure = figure;
    }
    public setFigure(cellFigure: FigureModel): void {
        this.cellFigure = cellFigure;
    }
    public getCords(): ICellCords {
        return this.cellCords;
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