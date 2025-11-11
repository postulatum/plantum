import { Area, Module } from "../../model/types"
import { alg } from "./alg"
import { cgv } from "./cgv"
import { dbi } from "./dbi"
import { dbm } from "./dbm"
import { extra } from "./extra"
import { fma } from "./fma"
import { hpc } from "./hpc"
import { mla } from "./mla"
import { rob } from "./rob"
import { rrv } from "./rrv"
import { se } from "./se"
import { sp } from "./sp"

export const modules: Partial<Module>[] = [
    ...alg,
    ...cgv,
    ...dbi,
    ...dbm,
    ...extra,
    ...fma,
    ...hpc,
    ...mla,
    ...rob,
    ...rrv,
    ...se,
    ...sp
]

modules.forEach(module => {
    let m = new Module(module.name!, module.credits!, module.area!, module.isTheoretical);
    console.log(m.toString());
}
)

