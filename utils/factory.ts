import type { Area, Module, Semester } from "../model/types";

function newSemester(name: string, modules: Module[] = []): Semester {
    return {
        id: crypto.randomUUID(),
        name,
        modules,
    };
}

function newModule(name: string, credits: number, area: Area, isTheoretical: boolean = false): Module {
    return {
        id: crypto.randomUUID(),
        name,
        credits,
        area,
        isTheoretical,
    };
}

export { newModule, newSemester };