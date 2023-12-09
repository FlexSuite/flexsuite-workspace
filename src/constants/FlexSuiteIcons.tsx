import { FlexSuiteCommonPages, FlexSuiteFaturPages, FlexSuiteModules, FlexSuiteSecasPages } from "@/enum/FlexSuiteNavigation"
import { BiSolidFactory } from "react-icons/bi"
import { FaChartArea, FaMoneyBillAlt, FaTruckLoading, FaUsers } from "react-icons/fa"
import { FaCartFlatbed, FaMoneyBillTransfer, FaPeopleGroup } from "react-icons/fa6"
import { MdOutlineBalance, MdOutlineSecurity } from "react-icons/md"
import { RiCustomerService2Line, RiProfileFill } from "react-icons/ri"
import { LiaFileInvoiceDollarSolid } from "react-icons/lia"
import { IoSettingsSharp } from "react-icons/io5"

/**
 * FlexSuiteIcons
 * 
 * Obter icones para os modulos e telas
 */

function getModuleIcon(module: FlexSuiteModules) {
    return FlexSuiteModuleIcons[module]
}

function getPageIcon(module: FlexSuiteModules, page: any) {
    return FlexSuitePageIcons[module][page]
}

export const FlexSuiteIcons = {
    getModuleIcon,
    getPageIcon
}

const FlexSuiteModuleIcons = {
    [FlexSuiteModules.WORKS]: <></>,
    [FlexSuiteModules.SECAS]: <MdOutlineSecurity/>,
    [FlexSuiteModules.FATUR]: <FaMoneyBillAlt/>,
    [FlexSuiteModules.ANALY]: <FaChartArea/>,
    [FlexSuiteModules.CONTI]: <MdOutlineBalance/>,
    [FlexSuiteModules.LOGIS]: <FaTruckLoading/>,
    [FlexSuiteModules.PRODU]: <BiSolidFactory/>,
    [FlexSuiteModules.REHUM]: <FaPeopleGroup/>,
    [FlexSuiteModules.ATEND]: <RiCustomerService2Line/>,
    [FlexSuiteModules.SUPRI]: <FaCartFlatbed/>,
}

const FlexSuitePageIcons: {
    [key in FlexSuiteModules]: any
} = {
    [FlexSuiteModules.WORKS]: {
        [FlexSuiteCommonPages.HOME]: <></>,
    },
    [FlexSuiteModules.SECAS]: {
        [FlexSuiteCommonPages.HOME]: <></>,
        [FlexSuiteSecasPages.USUARIOS]: <FaUsers />,
        [FlexSuiteSecasPages.PRESTADORES]: <RiProfileFill/> ,
        [FlexSuiteSecasPages.CONFIGURACOES]: <IoSettingsSharp/>,
    },
    [FlexSuiteModules.FATUR]: { 
        [FlexSuiteCommonPages.HOME]: <></>,
        [FlexSuiteFaturPages.COBRANCAS]: <FaMoneyBillTransfer/>,
        [FlexSuiteFaturPages.FATURAS]: <LiaFileInvoiceDollarSolid/>,
        [FlexSuiteFaturPages.CONFIGURACOES]: <IoSettingsSharp/>,
    },
    [FlexSuiteModules.ANALY]: {
        [FlexSuiteCommonPages.HOME]: <></>,
    },
    [FlexSuiteModules.CONTI]: {
        [FlexSuiteCommonPages.HOME]: <></>,
    },
    [FlexSuiteModules.LOGIS]: {
        [FlexSuiteCommonPages.HOME]: <></>,
    },
    [FlexSuiteModules.PRODU]: {
        [FlexSuiteCommonPages.HOME]: <></>,
    },
    [FlexSuiteModules.REHUM]: {
        [FlexSuiteCommonPages.HOME]: <></>,
    },
    [FlexSuiteModules.ATEND]: {
        [FlexSuiteCommonPages.HOME]: <></>,
    },
    [FlexSuiteModules.SUPRI]: {
        [FlexSuiteCommonPages.HOME]: <></>,
    },
}