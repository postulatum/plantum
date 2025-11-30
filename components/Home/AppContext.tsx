import React, { createContext, useContext } from "react";
import type { Slot, Semester, Module, ID } from "../../model/types.ts";

interface State<T> {
    byId: Record<ID, T>;
    allIds: ID[];
}

// Interface for global app context
interface IAppContext {
    slots: State<Slot>;
    semesters: State<Semester>;
    modules: State<Module>;
    addSlot: (slot: Slot) => void;
    addSemester: (slotId: ID, semester: Semester) => void;
    addModule: (semesterId: ID, module: Module) => void;
}

const AppContext = createContext<IAppContext | null>(null);


export { AppContext };
export type { IAppContext, State };
