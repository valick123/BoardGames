import { CellModel } from "../../Modules/Cell/Cell.model";
import { PlayerModel } from "../../Modules/Player/Player.model";

export interface IGameSignature {
    gameName: string;
    players: PlayerModel[];
    cells: CellModel[][];
}