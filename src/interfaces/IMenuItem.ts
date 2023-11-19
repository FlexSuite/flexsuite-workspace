export interface IMenuItem {
    id: number;
    label: string;
    path: string;
    icon?: string;
    children?: IMenuItem[];
}