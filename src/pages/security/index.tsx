import { Secas } from "@/modules/secas/Index"
import { usePathname , useRouter } from "next/navigation"
import React from "react"

export default function Home() {
	const pathname = usePathname()
	const router = useRouter()

	React.useEffect(() => {
		if(pathname == "/security")
			router.replace("/security/users")
	},[pathname, router])
  
	//To-Do Rever isso
	function Component(){
		switch(pathname){
			default:
			case "/security/users":
				return <Secas.Usuarios/>
			case "/security/providers":
				return <Secas.Prestadores/>
			case "/security/settings":
				return <Secas.Configuracoes/>
		}
	}

    return (
      <div>
        <Component/>
      </div>
    )
  }