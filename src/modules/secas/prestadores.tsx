import { FlexSuiteSecasPages } from "@/enum/FlexSuiteNavigation"
import React, { useEffect } from "react"
import { SecasModule } from "./SecasModule"

export function Prestadores(){
    const [ActualPage, setActualPage] = React.useState<any>()
    const [loading, setLoading] = React.useState(true)

    useEffect(()=>{
        new SecasModule((mod)=>{
            setActualPage(mod.page(FlexSuiteSecasPages.PRESTADORES))
            setLoading(false)
        })
    },[])

    if(!ActualPage || loading)
        return <>Carregando...</>

    return ActualPage
}