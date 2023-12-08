import { usePathname , useRouter } from "next/navigation"
import React from "react"

export default function Home() {
	const pathname = usePathname()
	const router = useRouter()

	React.useEffect(() => {
		if(pathname == "/security")
			router.replace("/security/users")
	},[pathname, router])

    return <></>
  }