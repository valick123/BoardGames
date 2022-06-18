import { Command } from "../../../../Common/Command";
import { Game } from "../../../../Common/Game";
import { GameController } from "../Game.controller";

export class SetGameCommand extends Command {
    protected static instance: SetGameCommand | null = null;
    protected commandConsumer: GameController = GameController.getInstance();
    private constructor() {
        super();
    }
    public execute(game: Game): void {
        this.commandConsumer.setGame(game);
    }
    public static getInstance(): SetGameCommand {
        if (this.instance === null) {
            this.instance = new SetGameCommand();
        }
        return this.instance;
    }
}