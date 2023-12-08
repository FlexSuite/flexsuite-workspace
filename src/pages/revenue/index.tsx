import { Fatur } from "@/modules/fatur/Index"
import { usePathname , useRouter } from "next/navigation"
import React from "react"

export default function Home() {
	const pathname = usePathname()
	const router = useRouter()

	React.useEffect(() => {
		if(pathname == "/revenue")
			router.replace("/revenue/invoices")
	},[pathname, router])
  
	function Component(){
		switch(pathname){
			default:
			case "/revenue/invoices":
				return <Fatur.Faturas/>
			case "/revenue/billing":
				return <Fatur.Cobrancas/>
			case "/revenue/settings":
				return <Fatur.Configuracoes/>
		}
	}

    return (
      <div>
        <Component/>
      </div>
    )
  }