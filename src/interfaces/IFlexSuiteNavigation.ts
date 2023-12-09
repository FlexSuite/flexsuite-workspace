import { FlexSuiteModules, ModuleRoutes, NavigationModules, NavigationPages } from "@/enum/FlexSuiteNavigation"

interface IFlexSuiteNavigationModule{
    name: string
    path: string
    icon?: any
    pages:  {
        [key in any]: IFlexSuiteNavigationPage
    }
}

interface IFlexSuiteNavigationPage {
    name: string
    path: string
    icon?: any
}

export type IFlexSuiteNavigation = {
    [key in FlexSuiteModules]: IFlexSuiteNavigationModule
}

export type IFlexSuiteNavigationContext = {
    module: NavigationModules | undefined,
    page: NavigationPages | undefined,
    routes: ModuleRoutes | undefined,
    allRoutes: ModuleRoutes | undefined
    navigateTo: (path: string | undefined) => void
  }