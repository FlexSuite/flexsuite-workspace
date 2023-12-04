import { ISidebarItem } from "@/interfaces/ISidebarItem"
import React from "react"

export function SidebarItem({item}:{item:ISidebarItem}) {
    const dropdownId = `dropdown-${item.label.replace(" ", "-").toLowerCase()}-${item.id}`

    return (
        <li>
            <GenerateMenuButton>
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
        return (
            <ul id={dropdownId} className="hidden py-2 space-y-2">
                {
                    item.children?.map((child, index) => {
                        return <SidebarItem key={index} item={child} />
                    })
                }
            </ul>
        )
    }
    function GenerateMenuButton({children}:{children:any}){
        if(!item.children || item.children.length == 0)
            return  <a
                        href={item.path}
                        className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                            {children}
                    </a>

        return <button
                type="button"
                className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls={dropdownId}
                data-collapse-toggle={dropdownId}
                >
                    {children}
                </button>
        
    }
}