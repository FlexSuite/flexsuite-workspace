import { INotificationItem } from "@/interfaces/INotificationItem"

function Toggle() {
    return <button
        type="button"
        data-dropdown-toggle="notification-dropdown"
        className="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
    >
        <span className="sr-only">View notifications</span>
        {/* Bell icon */}
        <svg
            aria-hidden="true"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
            ></path>
        </svg>
    </button>
}

function Dropdown() {
    function getRandomDate(){
        const now = new Date()
        const random = Math.floor(Math.random() * 10080)
        const date = new Date(now.getTime() - random * 60000)
        return date
    }
    
    const notifications:INotificationItem[] = [
        {
            id:0,
            title:'Novo Modulo Liberado!',
            description:'O módulo de Suprimentos foi liberado para uso!',
            date: getRandomDate(),
            from: 'FlexSuite',
            read: false
        },
        {
            id:1,
            title:'Novo Modulo Liberado!',
            description:'O módulo de Faturamento foi liberado para uso!',
            date: getRandomDate(),
            from: 'FlexSuite',
            read: false
        },
        {
            id:2,
            title:'Novo Modulo Liberado!',
            description:'O módulo de Gestão foi liberado para uso!',
            date: getRandomDate(),
            from: 'FlexSuite',
            read: false
        },
    ]

    return <div
                className="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none dark bg-white rounded divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700 rounded-xl"
                id="notification-dropdown"
            >
                <div
                    className="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300"
                >
                    Notificações
                </div>
                <div>

                    {
                        notifications.sort((a,b)=>(b.date.getTime()-a.date.getTime())).map((notification:INotificationItem) => {
                            return <NotificationItem key={`notification-item-${notification.id}`} {...notification}/>
                        })
                    }
                    
                </div>
                <a
                    href="#"
                    className="block py-2 text-md font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:underline"
                >
                    <div className="inline-flex items-center">
                        <svg
                            aria-hidden="true"
                            className="mr-2 w-4 h-4 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                            <path
                                fill-rule="evenodd"
                                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                        Ver todas
                    </div>
                </a>
            </div>
}

function NotificationItem(notification: INotificationItem){

    function getMinutesFromNotification(){
        const now = new Date()
        const diff = now.getTime() - notification.date.getTime()
        const minutes = Math.floor(diff / 1000 / 60)

        if(minutes === 0) return 'Agora'    
        if(minutes === 1) return 'Alguns seguns atrás'
        if(minutes > 2 && minutes < 60) return `${minutes} minuto${minutes > 1 ? 's' : ''} atrás`
        if(minutes >= 60 && minutes < 1440) return `${Math.floor(minutes / 60)} hora${Math.floor(minutes / 60) > 1 ? 's' : ''} atrás`
        if(minutes >= 1440 && minutes < 10080) return `${Math.floor(minutes / 1440)} dia${Math.floor(minutes / 1440) > 1 ? 's' : ''} atrás`
        if(minutes >= 10080 && minutes < 40320) return `${Math.floor(minutes / 10080)} semana${Math.floor(minutes / 10080) > 1 ? 's' : ''} atrás`
        if(minutes >= 40320 && minutes < 525600) return `${Math.floor(minutes / 40320)} m${Math.floor(minutes / 40320) > 1?'ê':'e'}s${Math.floor(minutes / 40320) > 1 ? 'es' : ''} atrás`
        if(minutes >= 525600) return `${Math.floor(minutes / 525600)} ano${Math.floor(minutes / 525600) > 1 ? 's' : ''} atrás`
 
    }

    return <a
                href="#"
                className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
            >
                {/* <div className="flex-shrink-0">
                    <img
                        className="w-11 h-11 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                        alt={notification}
                    />
                    <div
                        className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 rounded-full border border-white bg-primary-700 dark:border-gray-700"
                    >
                        <svg
                            aria-hidden="true"
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
                            ></path>
                            <path
                                d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                            ></path>
                        </svg>
                    </div>
                </div> */}
                <div className="pl-3 w-full">
                    <div
                        className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"
                        suppressHydrationWarning 
                    >
                        Nova Notificação de <span className="font-semibold text-gray-900 dark:text-white">{notification.from}</span>: <br />
                        <h4>{notification.title}</h4>
                        {notification.description}
                    </div>
                    <div
                        className="text-xs font-medium text-primary-600 dark:text-primary-500"
                        title={notification.date.toLocaleDateString() + ' ' + notification.date.toLocaleTimeString()}
                        suppressHydrationWarning 
                    >
                        {getMinutesFromNotification()}
                    </div>
                </div>
            </a>
}
export function Notification(){
    return(
        <>
            <Toggle/>
            <Dropdown/>
        </>
    )
}