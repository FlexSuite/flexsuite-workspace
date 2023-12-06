import { useEffect } from 'react'
import { SearchNavbarInput } from './SearchNavbarInput'
import { Notification } from './Notification'
import { Apps } from './Apps'
import { DrawerNavigation } from './DrawerNavigation'
import { Profile } from './Profile'
import { initFlowbite } from 'flowbite'
import Image from 'next/image'

export function Navbar() {

    useEffect(()=> {
        initFlowbite()
    })

    
    return <nav className='border-b border-gray-200 px-4 py-2.5 bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50'>
                <div className='flex flex-wrap justify-between items-center'>
                    <div className='flex justify-start items-center ps-10'>
                        <div className='flex items-center'>
                            <DrawerNavigation/>
                            <div className='flex-shrink-0 flex items-center'>
                                <Image className='h-8 w-8' src='/white-icon.png' width={32} height={32} alt='FlexSuite ERP' title='FlexSuite ERP' />
                                <div className='flex flex-row items-center column'>
                                    <h1 className='ps-2 text-white text-lg font-medium'>FlexSuite</h1>
                                    <p className='text-xs ps-1 font-bold' style={{color:'#00FF43'}}>ERP</p>
                                </div>
                            </div>
                            <SearchNavbarInput/>
                        </div>
                    </div>
                    <div className='flex items-center lg:order-2 mr-20'>
                        <div className='flex items-center'>
                            <Notification/>
                            <Apps/>
                            <Profile/>
                        </div>
                    </div>
                </div>
            </nav>
}