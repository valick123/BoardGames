import { PlayerModel } from "../../../Modules/Player/Player.model";
import { Colors } from "../../Common.types";

export class PlayersFactory {
    public getPlayer(name: string, figureColor: Colors): PlayerModel {
        return new PlayerModel(name, figureColor);
    }
}