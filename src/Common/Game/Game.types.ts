import { CellModel } from "../../Modules/Cell/Cell.model";
import { PlayerModel } from "../../Modules/Player/Player.model";

export interface IGameSignature {
    gameName: string;
    players: PlayerModel[];
    cells: CellModel[][];
}

export interface IGameScheme {
    players: IPlayer[];
    cells: ICell[][];
    gameName: string;
}

export interface IPlayer {
    name: string;
    figureColor: string;
}

export interface ICell {
    cords: ICellCords;
    figure: IFigure | null;
    color: string;
}

interface IFigure {
    figureColor: string;
    figureName: string;
}
export interface ICellCords {
    row: number;
    col: number;
}