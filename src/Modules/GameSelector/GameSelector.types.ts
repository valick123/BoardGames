import { Game } from "../../Common/Game";

export interface IGameSelectorProps {
    label: string;
    gameOptions: IGameSelectorOption[];
}

export interface IGameSelectorOption {
    label: string;
    gameObj: Game;
}