import { useEffect } from "react";
import { ThemeSelectorModel } from "./ThemeSelector.model";
import { IThemeSelectorProps } from "./ThemeSelector.types";

export function ThemeSelector(props: IThemeSelectorProps) {
    const themeSelectorModel: ThemeSelectorModel = ThemeSelectorModel.getInstance();
    themeSelectorModel.setProps(props);

    useEffect(() => {
        themeSelectorModel.onChangeTheme(props.themeOptions?.[0]?.label);
    }, [])

    return (
        <>
            <label
                htmlFor={props.label}
            >
                {props.label}
            </label>
            <select
                id={props.label}
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                    themeSelectorModel.onChangeTheme(event.target.value);
                }}
            >
                {
                    themeSelectorModel.getThemeOptions()
                }
            </select>
        </>
    )
}