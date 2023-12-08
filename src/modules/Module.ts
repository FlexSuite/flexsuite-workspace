import { FlexSuiteModules } from "@/enum/FlexSuiteNavigation"
import { IModule, IModuleImport } from "@/interfaces/IModule"
import React from "react"

export class Module<PagesEnum> implements IModule<PagesEnum> {
    protected _name: string = 'unknow'
    protected _version: string = 'unknow'
    protected _path: string = '/unknow'
    protected _pagesKeys: string[] = []
    protected _pages: object = {}
    protected _home: any = React.Fragment
    
    isLoaded: boolean = false
    inLoading: boolean = false
    hasError: boolean = false
    error: any = null

    constructor(module: FlexSuiteModules,onLoad?: (mod: Module<PagesEnum>) => void) {
        this.inLoading = true
        switch (module) {
            case FlexSuiteModules.FATUR:
                this._path = '/revenue'
                import('fatur/module')
                    .then((mod: IModuleImport) => this.loadData(mod))
                    .catch((err: any) => this.catchError(err))
                    .finally(() => onLoad?.(this))
                break
            case FlexSuiteModules.SECAS:
                this._path = '/security'
                import('secas/module')
                    .then((mod: IModuleImport) => this.loadData(mod))
                    .catch((err: any) => this.catchError(err))
                    .finally(() => onLoad?.(this))
                break
            default:
                this._path = '/unknow'
                break
        }
    }
    protected catchError(err: any){
        this.error = err
        this.hasError = true
        this.isLoaded = false
        this.inLoading = false
    }

    protected loadData(mod: IModuleImport) {
        this._version = mod._version
        this._name = mod._name
        this._pages = mod._pages
        this._path = mod._path
        this._pagesKeys = Object.keys(mod?._pages ?? {})
        this._home = mod._pages['Home']
        this.isLoaded = true
        this.inLoading = false
    }

    name(): string {
        return this._name
    }

    version(): string {
        return this._version
    }

    pages(): object {
        return this._pages
    }

    pagesKeys(): string[] {
        return this._pagesKeys
    }

    path(): string {
        return this._path
    }

    isOnModule(path: string): boolean {
        return path.includes(this._path)
    }

    Home(): JSX.Element {
        return this._home
    }

    public page(page: PagesEnum): JSX.Element {
        if(!this?._pages)
            return React.cloneElement(React.createElement("div", {}, `Error: Module ${this.constructor.name} not loaded`))
        
        return  Object.values(this._pages).find((p: any) => p.name === page) 
                ?? 
                React.cloneElement(React.createElement("div", {}, 'Error: Page not found'))
    }
}