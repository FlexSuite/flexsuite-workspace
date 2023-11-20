import React from 'react'
import { Navbar } from '@/components/navbar'
import '../styles/globals.css'
import { Sidebar } from '@/components/sidebar'
import 'flowbite'

function MyApp({ Component, pageProps }: any) {
  const [isDarkMode, setIsDarkMode] = React.useState(true)

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)


  return <div className={`antialiased bg-gray-50 dark:bg-gray-900 ${isDarkMode?'dark':'light'}`}>
          <Navbar/>
          <Sidebar toggleDarkMode={toggleDarkMode}/>
          <div className="p-4 sm:ml-64 pt-20">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                <Component {...pageProps} />
            </div>
          </div>
        </div>
}

export default MyApp