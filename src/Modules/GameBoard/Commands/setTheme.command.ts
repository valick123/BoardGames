import { Command } from "../../../Common/Command";
import { GameBoardModel } from "../GameBoard.model";

export class SetThemeCommand extends Command {
    protected static instance: SetThemeCommand | null = null;
    protected commandConsumer: GameBoardModel = GameBoardModel.getInstance();
    private constructor() {
        super();
    }

    public execute(themeScheme: any): void {
        this.commandConsumer.setThemeSettings(themeScheme);
    }

    public static getInstance(): SetThemeCommand {
        if (this.instance === null) {
            this.instance = new SetThemeCommand();
        }
        return this.instance;
    }
}