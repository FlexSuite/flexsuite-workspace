import { FlexSuiteFaturPages } from "@/enum/FlexSuiteNavigation"
import React, { useEffect } from "react"
import { FaturModule } from "./FaturModule"

export function Cobrancas(){
    const [ActualPage, setActualPage] = React.useState<any>()
    const [loading, setLoading] = React.useState(true)

    useEffect(()=>{
        new FaturModule((mod)=>{
            setActualPage(mod.page(FlexSuiteFaturPages.COBRANCAS))
            setLoading(false)
        })
    },[])

    if(!ActualPage || loading)
        return <>Carregando...</>

    return ActualPage
}