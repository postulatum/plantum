import type { Area, Module, Semester, ID, Term, Slot} from "../model/types";

function newSlot(year: number, term: Term, semesterIds: ID[] = []): Slot {
    return {
        id: crypto.randomUUID(),
        year,
        term,
        semesterIds,
    };
}

function newSemester(name: string, moduleIds: ID[] = []): Semester {
    return {
        id: crypto.randomUUID(),
        name,
        moduleIds,
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

export { newModule, newSemester, newSlot};