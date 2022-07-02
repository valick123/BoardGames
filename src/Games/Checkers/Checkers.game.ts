import { Game } from "../../Common/Game/Game";
import { IGameScheme } from "../../Common/Game/Game.types";
import { CheckersInitialScheme } from "./CheckersInitalScheme";

export class CheckersGame extends Game {
    protected gameInitialScheme: IGameScheme = CheckersInitialScheme;
}