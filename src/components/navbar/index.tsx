import Image from 'next/image'
import { SearchNavbarInput } from './SearchNavbarInput'
import { Notification } from './Notification'
import { Apps } from './Apps'
import { DrawerNavigation } from './DrawerNavigation'
import { Profile } from './Profile'

export function Navbar() {
    
    return <nav className='border-b border-gray-200 bg-gray-800 border-gray-700 fixed left-0 right-0 top-0 z-50'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    <div className='flex h-16 items-center justify-between'>
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
                        <UserProfile/>
                    </div>
                </div>
            </nav>


    function UserProfile(){
        return  <div className='md:block'>
                    <div className='ml-4 flex items-center md:ml-6'>
                        <Notification/>
                        <Apps/>
                        <Profile/>
                    </div>
                </div>
    }
}