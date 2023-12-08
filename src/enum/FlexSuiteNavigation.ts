export enum FlexSuiteModules{
    'WORKS' = 'Workspace',
    'SECAS' = 'Seguranca_e_Controle_de_Acesso',
    'FATUR' = 'Faturamento',
    'ANALY' = 'Analytics_e_Relatorios',
    'CONTI' = 'Contabilidade',
    'LOGIS' = 'Logistica',
    'PRODU' = 'Producao',
    'REHUM' = 'Recursos_Humanos',
    'ATEND' = 'Atendimento',
    'SUPRI' = 'Suprimentos',
}

export enum FlexSuiteCommonPages{
    'HOME' = 'Home',
}

export enum FlexSuiteFaturPages {
    'COBRANCAS' = 'Cobrancas',
    'FATURAS' = 'Faturas',
    'CONFIGURACOES' = 'Configuracoes',
}

export enum FlexSuiteSecasPages {
    'PRESTADORES' = 'Prestadores',
    'USUARIOS' = 'Usuarios',
    'CONFIGURACOES' = 'Configuracoes',
}

export type ModuleRoutes = {
    [module in NavigationModules]: ModulePages
}

export type ModulePages = {
    [page in NavigationPages]?: string
}

export type NavigationPages = (

        FlexSuiteCommonPages | 
        FlexSuiteFaturPages |
        FlexSuiteSecasPages
    )

    
export type NavigationModules = FlexSuiteModules