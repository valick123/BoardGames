import { GameSelector } from "../GameSelector/GameSelector.view";
import { IAppProps } from "./App.types";
import { AppModel } from "./App.model";
import { allGames } from "../../Games/allGames";
import { GameBoard } from "../GameBoard/GameBoard.view";
import { ThemeSelector } from "../ThemeSelector/ThemeSelector.view";
import { allThemes } from "../../Common/Themes/allThemes";

export function App(props: IAppProps) {
    const appModel: AppModel = AppModel
        ?.getInstance();
    appModel
        ?.setProps(props);
    return (
        <>
            <GameSelector
                label="Выбор игры"
                gameOptions={allGames}
            />
            <ThemeSelector
                label="Выбор темы"
                themeOptions={allThemes}
            />
            <GameBoard />
        </>
    )
}