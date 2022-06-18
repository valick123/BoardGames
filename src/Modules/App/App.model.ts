import { ComponentModel } from "../../Common/ComponentModel";
import { IAppProps } from "./App.types";

export class AppModel extends ComponentModel<IAppProps> {
    protected static instance: AppModel | null = null;
    private constructor() {
        super();
    }
    public static getInstance(): AppModel {
        if (this.instance === null) {
            this.instance = new AppModel();
        }
        return this.instance;
    }
}