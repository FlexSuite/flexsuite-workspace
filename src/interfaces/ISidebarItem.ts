export interface ISidebarItem {
    id: number;
    label: string;
    path: string;
    icon?: any;
    children?: ISidebarItem[];
}