import dynamic from "next/dynamic"
import React from "react"

export function Billing(){
    const [hasError, setHasError] = React.useState(false)
    try{
        const Module = dynamic(() => import("fatur/billing")
            .then((mod) => mod)
            .catch(e => {
                // eslint-disable-next-line no-console
                console.log('RevenueModule error',e)
                setHasError(true)
            }), { ssr: false })
        if(hasError) throw new Error('Erro ao carregar o módulo Faturamento / Cobranças')
                    
        return  <Module/>
    }catch(e: any){
        return <div>{e.message}</div>
    }
}