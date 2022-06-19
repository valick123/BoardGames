import { CellModel } from "./Cell.model";

export interface ICellProps {
    model: CellModel;
    cellDecoration: any
}

export interface ICellCords {
    row: number;
    col: number;
}