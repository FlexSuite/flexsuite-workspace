import { FlexSuiteRevenuePages } from "@/enum/FlexSuiteNavigation"
import React, { useEffect } from "react"
import { RevenueModule } from "../RevenueModule"

export function Invoices(){
    const [ActualPage, setActualPage] = React.useState<any>()
    const [loading, setLoading] = React.useState(true)

    useEffect(()=>{
        new RevenueModule((mod)=>{
            setActualPage(mod.page(FlexSuiteRevenuePages.INVOICES))
            setLoading(false)
        })
    },[])

    if(!ActualPage || loading)
        return <>Carregando...</>

    return ActualPage
}