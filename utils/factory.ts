import type { Area } from "@/model/area";
import type { Slot } from "@/model/slot";
import type { Term } from "@/model/term";
import type { Semester } from "@/model/semester";
import type { Id } from "@/model/id";
import type { Module } from "@/model/module";

function newSlot(year: number, term: Term, semesterIds: Id[] = []): Slot {
    return {
        id: crypto.randomUUID(),
        year,
        term,
        semesterIds,
    };
}

function newSemester(name: string, moduleIds: Id[] = []): Semester {
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