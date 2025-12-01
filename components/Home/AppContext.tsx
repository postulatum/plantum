import { createContext } from "react";
import { Slot } from "@/model/slot";
import { Semester } from "@/model/semester";
import { Module } from "@/model/module";
import { Id } from "@/model/id";

interface State<T> {
    byId: Record<Id, T>;
    allIds: Id[];
}

// Interface for global app context
interface IAppContext {
    slots: State<Slot>;
    semesters: State<Semester>;
    modules: State<Module>;
    addSlot: (slot: Slot) => void;
    addSemester: (slotId: Id, semester: Semester) => void;
    addModule: (semesterId: Id, module: Module) => void;
    setActiveSemester: (slotId: Id, semesterId: Id) => void;
    getActiveSemester: (slotId: Id) => Id | null;
}

const AppContext = createContext<IAppContext | null>(null);

export { AppContext };
export type { IAppContext, State };
