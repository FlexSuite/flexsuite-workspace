import { FlexSuiteCommonPages, FlexSuiteModules, FlexSuiteFaturPages, ModuleRoutes } from "@/enum/FlexSuiteNavigation"

export const FlexSuiteModuleRoutes: ModuleRoutes = {
    [FlexSuiteModules.WORKS]: {
        [FlexSuiteCommonPages.HOME]: '/',
    },
    [FlexSuiteModules.FATUR]: {
        [FlexSuiteCommonPages.HOME]: '/revenue',
        [FlexSuiteFaturPages.COBRANCAS]: '/revenue/billing',
        [FlexSuiteFaturPages.FATURAS]: '/revenue/invoices',
        [FlexSuiteFaturPages.CONFIGURACOES]: '/revenue/settings',
    },
    [FlexSuiteModules['SECAS']]: undefined,
    [FlexSuiteModules['ANALY']]: undefined,
    [FlexSuiteModules['CONTI']]: undefined,
    [FlexSuiteModules['LOGIS']]: undefined,
    [FlexSuiteModules['PRODU']]: undefined,
    [FlexSuiteModules['REHUM']]: undefined,
    [FlexSuiteModules['ATEND']]: undefined,
    [FlexSuiteModules['SUPRI']]: undefined
}