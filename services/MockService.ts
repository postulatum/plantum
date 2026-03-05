import { moduleNames } from "@/data/mock/mockModuleNames.ts";
import { semesterNames } from "@/data/mock/mockSemesterNames.ts";
import { Area } from "@/model/area.ts";
import { Semester } from "@/model/semester.ts";
import { Slot } from "@/model/slot.ts";
import { Module } from "@/model/module.ts";
import { HasId } from "@/model/hasId"
import { State } from "@/components/Home/AppContext.tsx";
import { Id } from "@/model/id.ts";


export class MockService {

    public static toState<T extends HasId>(array: T[]): State<T> {
        return { byId: this.toRecord<T>(array), allIds: array.map((it: HasId) => it.id) };
    }

    public static getModule(): Module {
        const areas = Object.keys(Area);
        return {
            id: crypto.randomUUID(),
            name: this.getRandom(moduleNames),
            area: Area[this.getRandom(areas)],
            credits: Math.round(Math.random() * 10),
            isTheoretical: (Math.random() > 0.75)
        }
    }

    public static getSemester(): { semester: Semester, modules: Module[] } {
        const numOfModules = Math.round(Math.random() * 5);

        const modules = [];
        for (let i = 0; i < numOfModules; i++) {
            modules.push(this.getModule());
        }

        return {
            semester: {
                id: crypto.randomUUID(),
                name: this.getRandom(semesterNames),
                moduleIds: modules.map(it => it.id)
            },
            modules: modules
        }
    }

    public static getSlot(): { slot: Slot, semesters: Semester[], modules: Module[] } {
        const numOfSemesters = Math.round(Math.random() * 3);

        const allModules = [];
        const semesters = [];
        for (let i = 0; i < numOfSemesters; i++) {

            let { semester, modules } = this.getSemester();
            semesters.push(semester);
            allModules.push(...modules);
        }

        return {
            slot: {
                id: crypto.randomUUID(),
                year: 2024 + Math.round(Math.random() * 5),
                term: Math.random() > 0.5 ? "WiSe" : "SoSe",
                semesterIds: semesters.map(it => it.id)
            },
            semesters: semesters,
            modules: allModules
        }
    }

    public static getSlots(): { slots: Slot[], semesters: Semester[], modules: Module[] } {
        const numOfSlots = Math.round(1 + Math.random() * 3);

        const slots = []
        const allSemesters = []
        const allModules = []

        for (let i = 0; i < numOfSlots; i++) {
            let { slot, semesters, modules } = this.getSlot();
            if (slots.findIndex(it => it.year == slot.year && it.term == slot.term) != -1) {
                i--;
                continue;
            }
            slots.push(slot);
            allSemesters.push(...semesters);
            allModules.push(...modules);
        }

        return {
            slots: slots,
            semesters: allSemesters,
            modules: allModules
        };
    }

    private static toRecord<T extends HasId>(array: T[]): Record<Id, T> {return Object.fromEntries(array.map((it: T) => [it.id, it]));}

    private static getRandom(arr: any): any {
        return arr[Math.round(Math.random() * (arr.length - 1))];
    }
}

