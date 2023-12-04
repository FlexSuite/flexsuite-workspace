import { FlexSuiteModules } from "@/enum/FlexSuiteNavigation"

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