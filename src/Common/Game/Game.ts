import { GameSignatureBuilber } from "../GameSignatureBuilder/GameSignatureBuilder";
import { GameSignatureDirector } from "../GameSignatureBuilder/GameSignatureDirector";
import { IGameSignature } from "./Game.types";

export abstract class Game {
    protected gameSignature: IGameSignature = {} as IGameSignature;
    constructor(
        protected gameSignatureBuilder: GameSignatureBuilber,
        protected gameSignatureDirector: GameSignatureDirector
    ) {
        this.gameSignatureDirector.setBuilder(this.gameSignatureBuilder);
    }
    public initGame(): void {
        this.gameSignatureDirector?.createGameSignature();
        this.gameSignature = this.gameSignatureBuilder?.getGameSignature()
    }
    public getGameSignature(): IGameSignature {
        return this.gameSignature;
    }
}