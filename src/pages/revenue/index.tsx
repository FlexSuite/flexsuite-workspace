import { Revenue } from "@/modules/Revenue/Index"
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
				return <Revenue.Invoices/>
			case "/revenue/billing":
				return <Revenue.Billing/>
			case "/revenue/settings":
				return <Revenue.Settings/>
		}
	}

    return (
      <div>
        <Component/>
      </div>
    )
  }