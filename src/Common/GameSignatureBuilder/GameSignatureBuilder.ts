import { ElementsFactory } from "../Factories/ElementsFactory/ElementsFactory";
import { IGameSignature } from "../Game/Game.types";

export abstract class GameSignatureBuilber {
    protected gameSignature: IGameSignature = {} as IGameSignature;
    constructor(
        protected elementsFactory: ElementsFactory
    ) {

    }
    public reset(): void {
        this.gameSignature = {} as IGameSignature;
    }
    public abstract setPlayers(): void;
    public abstract setCells(): void;
    public abstract setFigures(): void;
    public abstract setGameName(): void;
    public getGameSignature(): IGameSignature {
        const temp: IGameSignature = this.gameSignature;
        this.reset();
        return temp;
    }
}