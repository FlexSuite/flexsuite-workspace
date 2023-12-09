export interface ISidebarItem {
    id: number;
    label: string;
    path?: string;
    icon?: any;
    badge?: number
    children?: ISidebarItem[];
}