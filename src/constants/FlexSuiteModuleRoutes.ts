import { FlexSuiteCommonPages, FlexSuiteModules, FlexSuiteRevenuePages, ModuleRoutes } from "@/enum/FlexSuiteNavigation"

export const FlexSuiteModuleRoutes: ModuleRoutes = {
    [FlexSuiteModules.DASHBOARD]: {
        [FlexSuiteCommonPages.HOME]: '/',
    },
    [FlexSuiteModules.REVENUE]: {
        [FlexSuiteCommonPages.HOME]: '/revenue',
        [FlexSuiteRevenuePages.BILLING]: '/revenue/billing',
        [FlexSuiteRevenuePages.INVOICES]: '/revenue/invoices',
        [FlexSuiteRevenuePages.SETTINGS]: '/revenue/settings',
    }
}