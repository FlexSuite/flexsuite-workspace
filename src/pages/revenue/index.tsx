import { usePathname , useRouter } from "next/navigation"
import React from "react"

export default function Home() {
	const pathname = usePathname()
	const router = useRouter()

	React.useEffect(() => {
		if(pathname == "/revenue")
			router.replace("/revenue/invoices")
	},[pathname, router])

    return <></>
  }