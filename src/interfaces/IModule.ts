export interface IModule<PagesEnum>{
    name(): string
    version(): string
    pages(): object
    pagesKeys(): string[]
    path(): string
    isOnModule(path: string): boolean
    page(page: PagesEnum): JSX.Element
    Home(): JSX.Element
}

export interface IModuleImport{
    _name: string
    _version: string
    _pages: any
    _path: string
}