import { FlexSuiteModules, FlexSuiteRevenuePages } from "@/enum/FlexSuiteNavigation"
import { Module } from "./Module"

export class RevenueModule extends Module<FlexSuiteRevenuePages>{
    constructor(onLoad?: (mod: Module<FlexSuiteRevenuePages>) => void) {
        super(FlexSuiteModules.REVENUE,onLoad)
    }
}