import { IMenuItem } from '@/interfaces/IMenuItem'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export function Navbar() {
    const [activeItem, setActiveItem] = useState<IMenuItem>()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const mobileItemActiveClass = 'bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium'
    const mobileItemClass = 'text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
    const itemActiveClass = 'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium'
    const itemClass = 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
    
    function MenuItems({mobile}: {mobile?: boolean} = {mobile:false}){
        const items: IMenuItem[] = [
            {id:0, label:'Dashboard', path:'#'},
            {id:1, label:'Planos', path:'#'},
            {id:2, label:'Projetos', path:'#'},
        ]

        useEffect(()=>{
            if(!activeItem)
                setActiveItem(items[0])
        },[])

        function MenuItem(item:IMenuItem){
            const isThisMenuItemActive = activeItem?.id === item.id
            const itClass = mobile ? 
                    isThisMenuItemActive ? mobileItemActiveClass : mobileItemClass
                    :
                    isThisMenuItemActive ? itemActiveClass : itemClass
            const handleClick = () => setActiveItem(item)
            return <a href='#' className={itClass} onClick={handleClick}>{item.label}</a>
        }

        return <div className={!mobile ? 'hidden md:block' : ''}>
                    <div className={mobile? 'space-y-1 px-2 pb-3 pt-2 sm:px-3' : 'ml-10 flex items-baseline space-x-4'}>
                        {items.map(item => <MenuItem key={`navbar-menu-item-${item.id}`} {...item}/>)}
                    </div>
                </div>
    }

    

    return <nav className='bg-gray-800 fixed top-0 right-0 left-0'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    <div className='flex h-16 items-center justify-between'>
                        <div className='flex items-center'>
                            <div className='flex-shrink-0 flex items-center'>
                                <Image className='h-8 w-8' src='/white-icon.png' width={32} height={32} alt='FlexSuite ERP' title='FlexSuite ERP' />
                                <div className='flex flex-row items-center column'>
                                    <h1 className='ps-2 text-white text-lg font-medium'>FlexSuite</h1>
                                    <p className='text-xs ps-1 font-bold' style={{color:'#00FF43'}}>ERP</p>
                                </div>
                            </div>
                            <MenuItems/>
                        </div>
                        <UserProfile/>
                        <MobileMenuToggle/>
                    </div>
                    <MobileMenu/>
                </div>
            </nav>


    function MobileMenu(){
        return <div className={`${mobileMenuOpen ? 'md:hidden' : 'hidden'}`} id='mobile-menu'>
                    <div className='space-y-1 px-2 pb-3 pt-2 sm:px-3'>
                        <MenuItems mobile/>
                    </div>
                    <UserProfile mobile/>
                </div>
    }

    function UserProfile({mobile}: {mobile?: boolean} = {mobile:false}){
        const [showDropdownMenu, setShowDropdownMenu] = useState(false)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [user,setUser] = useState({name:'Lucas Mendes', email:'lucas@endems.com'})

        function ProfileMenu(){
            const containerClass = mobile ? 
                                    'mt-3 space-y-1 px-2' 
                                    : (showDropdownMenu ? '' : 'hidden ') + 'absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
            const profileItemClass = mobile ? 
                                    'block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white'
                                    :'block px-4 py-2 text-sm text-gray-700'

            return  <div className={containerClass}>
                        <a href="#" className={profileItemClass} tabIndex={-1}>Perfil</a>
                        <a href="#" className={profileItemClass} tabIndex={-1}>Configurações</a>
                        <a href="#" className={profileItemClass} tabIndex={-1}>Sair</a>
                    </div>
        }

        function NotificationButton(){
            return <button type='button' className='relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                        <span className='absolute -inset-1.5'></span>
                        <span className='sr-only'>View notifications</span>
                        <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' aria-hidden='true'>
                            <path stroke-linecap='round' stroke-linejoin='round' d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0' />
                        </svg>
                    </button>
        }

        if(mobile)
            return <div className='border-t border-gray-700 pb-3 pt-4'>
                        <div className='flex items-center px-5'>
                            <div className='flex-shrink-0'>
                                <img className='h-10 w-10 rounded-full' src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' alt='' />
                            </div>
                            <div className='ml-3'>
                                <div className='text-base font-medium leading-none text-white'>{user.name}</div>
                                <div className='text-sm font-medium leading-none text-gray-400'>{user.email}</div>
                            </div>
                            <NotificationButton/>
                        </div>
                        <ProfileMenu/>
                    </div>

        return  <div className='hidden md:block'>
                    <div className='ml-4 flex items-center md:ml-6'>
                        <NotificationButton/>
                        <div className='relative ml-3 h'>
                            <div>
                                <button onClick={()=>setShowDropdownMenu(!showDropdownMenu)} type='button' className='relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800' id='user-menu-button' aria-expanded='false' aria-haspopup='true'>
                                    <span className='absolute -inset-1.5'></span>
                                    <span className='sr-only'>Open user menu</span>
                                    <img className='h-8 w-8 rounded-full' src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' alt='' />
                                </button>
                            </div>
                            <ProfileMenu/>
                        </div>
                        <div className="flex flex-col items-center ">
                            <div className='ml-3 text-sm font-medium leading-none text-white'>{user.name}</div>
                            <div className='ml-3 text-xs font-medium leading-none text-white'>{user.email}</div>
                        </div>
                    </div>
                </div>
    }

    function MobileMenuToggle(){
        return <div className='mr-2 flex md:hidden' onClick={()=>setMobileMenuOpen(!mobileMenuOpen)}>
                    <button type='button' className='relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800' aria-controls='mobile-menu' aria-expanded='false'>
                        <span className='absolute -inset-0.5'></span>
                        <span className='sr-only'>Acessar Menu</span>
                        <svg className='block h-6 w-6' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' aria-hidden='true'>
                            <path stroke-linecap='round' stroke-linejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
                        </svg>
                        <svg className='hidden h-6 w-6' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' aria-hidden='true'>
                            <path stroke-linecap='round' stroke-linejoin='round' d='M6 18L18 6M6 6l12 12' />
                        </svg>
                    </button>
                </div>
    }
}