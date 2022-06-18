import { CellModel } from "./Cell.model";

export interface ICellProps {
    model: CellModel;
}

export interface ICellCords {
    row: number;
    col: number;
}