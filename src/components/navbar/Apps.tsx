import { IAppItem } from "@/interfaces/IAppItem"
import React from "react"
import { AppMenu } from "@/constants/FlexSuiteMenu"
import { useFlexSuiteNavigation } from "@/context/FlexSuiteNavigation"

function Toggle() {
    return <button
        type="button"
        data-dropdown-toggle="modules-dropdown"
        className="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
    >
        <span className="sr-only">Ver Modulos</span>
        {/* Icon */}
        <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            ></path>
        </svg>
    </button>
}

function Dropdown() {

    const apps:IAppItem[] = AppMenu

    return <div className="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg dark:bg-gray-700 dark:divide-gray-600 rounded-xl"
                id="modules-dropdown">
                <div className="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300">
                    Modulos
                </div>
                <div className="grid grid-cols-3 gap-4 p-4">
                    {
                        apps.sort((a,b)=>(a.label.localeCompare(b.label))).map((app:IAppItem) => {
                            return <AppItem key={`app-item-${app.id}`} {...app}/>
                        })
                    }                    
                </div>
            </div>
}

function AppItem(item:IAppItem){
    const context = useFlexSuiteNavigation()

    function labelAdjust(){
        return item.label.replaceAll("_"," ")
                .replace("Relatorios","Relatórios")
                .replace("Seguranca","Segurança")
                .replace("Producao","Produção")
                .replace("Logistica","Logística")
    }
    return <a
                href="#"
                onClick={()=>context.navigateTo(item.path)}
                className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group items-center flex flex-col"
            >
                {React.cloneElement(item.icon,{className:'text-gray-900 dark:text-white w-5 h-5'})}
                <div className="text-sm text-gray-900 dark:text-white">{labelAdjust()}</div>
            </a>
}


export function Apps(){
    return (
        <>
            <Toggle/>
            <Dropdown/>
        </>
    )
}