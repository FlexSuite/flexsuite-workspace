/**
 * Navegação Flex Suite
 * 
 * Para criação de rota primeiro se cria no enum NavigationModules e NavigationPages
 * Após a criação no enum se cria na constante FlexSuiteModuleRoutes
 * Após isso Já poderá utilizar aqui
 * 
 * 
 * No banco de dados deverá ser criado uma tabela para armazenar as rotas com os mesmos
 * nomes do enum NavigationModules e NavigationPages
 * Separando tela por modulo e página
 * 
 * Aqui deverá ser feito a navegação da aplicação.
 * 
 */

import { Loading } from '@/components/loading'
import { FlexSuiteModuleRoutes } from '@/constants/FlexSuiteModuleRoutes'
import { NavigationModules, NavigationPages, ModuleRoutes } from '@/enum/FlexSuiteNavigation'
import { IFlexSuiteNavigationContext } from '@/interfaces/IFlexSuiteNavigation'
import { usePathname } from 'next/navigation'
import { useState, createContext, useContext, useEffect } from 'react'
import Image from 'next/image'

const FlexSuiteNavigationContext = createContext<IFlexSuiteNavigationContext | undefined>(undefined)
  
const FlexSuiteNavigationProvider: React.FC<{ children: any }> = 
  ({ children }) => {
  const homePage = FlexSuiteModuleRoutes.Workspace?.Home

  const [isLoading, setIsLoading] = useState<boolean>(true) // [true, false
  const [module, setModule] = useState<NavigationModules | undefined>(undefined)
  const [page, setPage] = useState<NavigationPages | undefined>(undefined)
  const [routes, setRoutes] = useState<ModuleRoutes | any>(undefined)
  // const [user, setUser] = useState<any>(undefined) To-Do
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [allRoutes, setAllRoutes] = useState<ModuleRoutes | any>(FlexSuiteModuleRoutes)
  //TO-DO
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [configurations, setConfigurations] = useState<any>(undefined) // [theme, language, ...
  const [hasPermission, setHasPermission] = useState<boolean>(false) // [true, false]
  const location = usePathname()

  useEffect(() => {
    //Obtem configurações do perfil
    checkConfigurations()

    //Verifica se usuário tem permissão a rota atual
    checkUserHasPermission()

    //Deverá verificar o usuário para verificar as rotas disponiveis
    
    // Percorra as rotas para encontrar o módulo e a página correspondentes ao pathname atual
    Object.entries(FlexSuiteModuleRoutes).forEach(([module, pages]) => {
      if(!pages)
        return
      // Iterando sobre as páginas do módulo
      Object.keys(pages).forEach((page) => {
        if (pages[page as NavigationPages] === location) {
          setModule(module as NavigationModules)
          setPage(page as NavigationPages)

          Object.entries(FlexSuiteModuleRoutes).forEach(([mod, pages]) => {
            if (mod === module) {
              setRoutes(pages)
              return
            }
          })
        }
      })
    })
  }, [location])

  const checkConfigurations = () => {
    setConfigurations({
      theme: 'dark',
      language: 'pt-br',
      //...
    })
  }
  const checkUserHasPermission = () => {
    //To-Do
    const hasPermission = Math.random() >= 0.5
    const randomTimeToAwait = Math.floor(Math.random() * 1000) + 500

    setTimeout(() => {
      setIsLoading(false)
    }, randomTimeToAwait)

    if (!hasPermission) {
      //Redireciona para página de erro
      // alert('Usuário não tem permissão para acessar essa página')

    }
    setHasPermission(hasPermission)
    setHasPermission(true)
  }

  function navigateTo(path?: string) {
    if (!path)
      return

    let moduleFound = undefined
    let pageFound = undefined

    Object.entries(FlexSuiteModuleRoutes).find(([module, pages]) => {
      if(!pages)
        return
      // Iterando sobre as páginas do módulo
      Object.keys(pages).forEach((page) => {
        if (pages[page as NavigationPages] === path) {
          moduleFound = (module as NavigationModules)
          pageFound = (page as NavigationPages)
          return true
        }
      })
    })

    if(!moduleFound || !pageFound){
      throw new Error(`Não foi possível encontrar a rota ${path}`)
    }else{      
      setModule(moduleFound)
      setPage(pageFound)
      setRoutes(FlexSuiteModuleRoutes[moduleFound])
  
      //Redireciona para a página
      window.open(path, '_self')
    }

  }

  return  <FlexSuiteNavigationContext.Provider value={{ 
    module,
    page,
    routes,
    allRoutes,
    navigateTo,
   }}>
              {
                isLoading ?
                <LoadPhase/>
                : hasPermission ? children : 
                <NoPermission/>
              }
          </FlexSuiteNavigationContext.Provider>

  
  function LoadPhase(){
    return <div className='bg-gray-800 w-100 w-full h-screen flex justify-center items-center'>
            <div className="h-12 w-12">
              <Loading/>
            </div>
          </div>
  }

  function NoPermission(){
    return <div className='bg-gray-800 w-100 w-full h-screen flex flex-col justify-center items-center'>
            <Image className='fixed top-10 left-10 w-8 h-8' src='/white-icon.png' width={32} height={32} alt='FlexSuite ERP' title='FlexSuite ERP' />
            <p className="text-white font-medium">
              Sem permissão para acessar esse conteúdo...
            </p>
            
            <button
              className='transition-all duration-500 mt-4 px-4 py-2 bg-gray-900 hover:bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50'
              onClick={() => window.location.href = homePage ?? '/'}
            >
              Volte para a página inicial
            </button>
          </div>
  }
  
}



export const useFlexSuiteNavigation = () => {
  const context = useContext(FlexSuiteNavigationContext)
  if (!context) {
    throw new Error('useFlexSuiteNavigation deve ser usado dentro de FlexSuiteNavigationProvider')
  }
  return context
}

export const FlexSuiteNavigation = {
  Context: FlexSuiteNavigationContext,
  Provider: FlexSuiteNavigationProvider
}