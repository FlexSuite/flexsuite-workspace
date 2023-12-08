import { FlexSuiteModules, FlexSuiteSecasPages } from "@/enum/FlexSuiteNavigation"
import { Module } from "../Module"

export class SecasModule extends Module<FlexSuiteSecasPages>{
    constructor(onLoad?: (mod: Module<FlexSuiteSecasPages>) => void) {
        super(FlexSuiteModules.SECAS,onLoad)
    }
}