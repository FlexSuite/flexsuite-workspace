import { ISidebarItem } from "@/interfaces/ISidebarItem"
import React from "react"
import { FaAngleDown } from "react-icons/fa"

export function SidebarItem({ item, isAChild }:{item: ISidebarItem,isAChild?:boolean}) {
    const dropdownId = item.children ? `dropdown-${item.label.replace(" ", "-").toLowerCase()}-${item.id}` : undefined

    return (
        <li>
            <GenerateMenuButton isAChild={isAChild}>
                <>

                {
                    item.icon != undefined ? 
                        React.cloneElement(item.icon, {className: "w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"})
                    : <> </>
                }

                <span className="ml-3">{item.label}</span>
                {
                    item.badge != undefined ? 
                    <span
                        className="ml-2 inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-primary-100 dark:bg-primary-200 dark:text-primary-800"
                    >
                        {item.badge}
                    </span>
                    : <></>
                }

                </>
            </GenerateMenuButton>
            <GenerateDropdown/>
        </li>
    )
    function GenerateDropdown(){
        if(!item.children) return (<></>)
        return (
            <ul id={dropdownId} className="hidden py-2 space-y-2">
                {
                    item.children?.map((child, index) => {
                        return <SidebarItem key={index} item={child} isAChild/>
                    })
                }
            </ul>
        )
    }
    function GenerateMenuButton({ children, isAChild }:{ children:any, isAChild?:boolean }){
        const btnId = `btn-${item.label.replace(" ", "-").toLowerCase()}-${item.id}`

        return <button
                type="button"
                id={btnId}
                className={`${isAChild? 'pl-5': ''} flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`}
                aria-controls={dropdownId}
                data-collapse-toggle={dropdownId}
                >
                    {children}
                    {
                        item.children != undefined ?
                        <span className="ms-5">
                            <FaAngleDown 
                            className="w-4 h-4 text-gray-500 transition duration-75 
                            dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                        </span>
                        : <></>
                    }
                </button>
        
    }
}