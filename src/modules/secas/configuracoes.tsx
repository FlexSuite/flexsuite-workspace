import { FlexSuiteSecasPages } from "@/enum/FlexSuiteNavigation"
import React, { useEffect } from "react"
import { SecasModule } from "./SecasModule"

export function Configuracoes(){
    const [ActualPage, setActualPage] = React.useState<any>()
    const [loading, setLoading] = React.useState(true)

    useEffect(()=>{
        new SecasModule((mod)=>{
            setActualPage(mod.page(FlexSuiteSecasPages.CONFIGURACOES))
            setLoading(false)
        })
    },[])

    if(!ActualPage || loading)
        return <>Carregando...</>

    return ActualPage
}