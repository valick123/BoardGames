import { ReactNode } from "react";
import { ComponentModel } from "../../Common/ComponentModel";
import { SetThemeCommand } from "../GameBoard/Commands/setTheme.command";
import { IThemeOption, IThemeSelectorProps } from "./ThemeSelector.types";

export class ThemeSelectorModel extends ComponentModel<IThemeSelectorProps> {
    protected static instance: ThemeSelectorModel | null = null;
    protected commands: any = {
        setThemeCommand: SetThemeCommand.getInstance()
    }

    private constructor() {
        super();
    }

    public getThemeOptions(): ReactNode[] {
        return this.props?.themeOptions
            ?.map((themeOption: IThemeOption) => {
                return (
                    <option
                        key={themeOption.label}
                        value={themeOption.label}
                    >
                        {themeOption.label}
                    </option>
                )
            }) ?? []
    }

    public onChangeTheme(themeLabel: string) {
        const themeScheme: any = this.props?.themeOptions
            ?.find((themeOption: IThemeOption) => themeOption.label === themeLabel)
            ?.themeScheme;
        if (themeScheme) {
            this.commands.setThemeCommand.execute(themeScheme);
        }
    }

    public static getInstance(): ThemeSelectorModel {
        if (this.instance === null) {
            this.instance = new ThemeSelectorModel();
        }
        return this.instance;
    }
}