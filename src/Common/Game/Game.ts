import { GameSignatureBuilber } from "../GameSignatureBuilder/GameSignatureBuilder";
import { GameSignatureDirector } from "../GameSignatureBuilder/GameSignatureDirector";
import { IGameScheme, IGameSignature } from "./Game.types";

export abstract class Game {
    protected gameSignature: IGameSignature = {} as IGameSignature;
    protected gameInitialScheme: IGameScheme = {} as IGameScheme;
    constructor(
        protected gameSignatureBuilder: GameSignatureBuilber,
        protected gameSignatureDirector: GameSignatureDirector
    ) {
        this.gameSignatureDirector.setBuilder(this.gameSignatureBuilder);
    }
    public initGame(): void {
        this.gameSignatureDirector?.createGameSignature(this.gameInitialScheme);
        this.gameSignature = this.gameSignatureBuilder?.getGameSignature()
    }
    public getGameSignature(): IGameSignature {
        return this.gameSignature;
    }
}