import { Colors } from "../../Common/Common.types";

export class PlayerModel {
    protected name: string;
    protected figureColor: Colors;
    constructor(name: string, figureColor: Colors) {
        this.name = name;
        this.figureColor = figureColor;
    }
}