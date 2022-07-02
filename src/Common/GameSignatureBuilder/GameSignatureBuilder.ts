import { ElementsFactory } from "../Factories/ElementsFactory/ElementsFactory";
import { IGameScheme, IGameSignature } from "../Game/Game.types";

export abstract class GameSignatureBuilber {
    protected gameSignature: IGameSignature = {} as IGameSignature;
    protected gameScheme: IGameScheme = {} as IGameScheme;
    constructor(
        protected elementsFactory: ElementsFactory
    ) {

    }
    public reset(): void {
        this.gameSignature = {} as IGameSignature;
        this.gameScheme = {} as IGameScheme;
    }
    public abstract setPlayers(): void;
    public abstract setCells(): void;
    public abstract setGameName(): void;
    public setGameScheme(scheme: IGameScheme): void {
        this.gameScheme = scheme;
    }
    public getGameSignature(): IGameSignature {
        const temp: IGameSignature = this.gameSignature;
        this.reset();
        return temp;
    }
}