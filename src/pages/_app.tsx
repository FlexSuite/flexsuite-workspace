import React from 'react'
import { Navbar } from '@/components/navbar'
import '../styles/globals.css'
import { Sidebar } from '@/components/sidebar'
import { FlexSuiteNavigation } from '@/context/FlexSuiteNavigation'

function MyApp({ Component, pageProps }: any) {

  const [isDarkMode, setIsDarkMode] = React.useState(true)

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)

  return  (
            <FlexSuiteNavigation.Provider>
              <div className={`antialiased bg-gray-50 dark:bg-gray-900 ${isDarkMode?'dark':'light'}`}>
                <Navbar/>
                <Sidebar toggleDarkMode={toggleDarkMode}/>
                <div className="p-4 sm:ml-64 pt-20">
                  <div className="p-4 rounded-lg">
                      <Component {...pageProps} />
                  </div>
                </div>
              </div>
            </FlexSuiteNavigation.Provider>
          )
}

export default MyApp