import { FlexSuiteModules, FlexSuiteFaturPages } from "@/enum/FlexSuiteNavigation"
import { Module } from "./Module"

export class FaturModule extends Module<FlexSuiteFaturPages>{
    constructor(onLoad?: (mod: Module<FlexSuiteFaturPages>) => void) {
        super(FlexSuiteModules.FATUR,onLoad)
    }
}