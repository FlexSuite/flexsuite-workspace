export enum FlexSuiteModules{
    'DASHBOARD' = 'Dashboard',
    'REVENUE' = 'Revenue', //Faturamento
}

export enum FlexSuiteCommonPages{
    'HOME' = 'Home',
}

export enum FlexSuiteRevenuePages {
    'BILLING' = 'Billing', //Cobranças
    'INVOICES' = 'Invoices', //Faturas
    'SETTINGS' = 'Settings', //Configurações
}

export type ModuleRoutes = {
    [module in NavigationModules]: ModulePages
}

export type ModulePages = {
    [page in NavigationPages]?: string
}

export type NavigationPages = (

        FlexSuiteCommonPages | 
        FlexSuiteRevenuePages

    )

    
export type NavigationModules = FlexSuiteModules