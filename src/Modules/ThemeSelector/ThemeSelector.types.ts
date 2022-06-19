export interface IThemeSelectorProps {
    label: string;
    themeOptions: IThemeOption[];
}

export interface IThemeOption {
    label: string;
    themeScheme: any;
}