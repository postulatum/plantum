import SlotList from "./SlotList/SlotList";
import Dashboard from "./Dashboard/Dashboard";
import { Slot } from "@/model/slot";
import { Semester } from "@/model/semester";
import { Module } from "@/model/module";
import { Id } from "@/model/id";
import { useState } from "react";
import { AppContext, IAppContext, State } from "./AppContext";
import { MockService } from "@/services/MockService.ts";

const moduleId1 = "c476e6c4-6e6d-4b69-81ef-03b0f7790809";
const semesterId1 = "b9644d46-fc5d-4c9b-936f-fd2d245f053d";
const slotId1 = "d3626192-0741-4d84-b6f7-1afabd7590b1";
const slotId2 = "89eca537-755c-4d74-ab0c-e579aca6d6dc";

export default function Home() {

    let randomMock = MockService.getSlots();

    console.log("modules", randomMock.modules);
    /* Initial Data */
    const initialModules: State<Module> = MockService.toState<Module>(randomMock.modules);
    const initialSemesters: State<Semester> = MockService.toState<Semester>(randomMock.semesters);
    const initialSlots: State<Slot> = MockService.toState<Slot>(randomMock.slots);
    const initialActiveSemestersBySlot: Record<Id, Id> = { };
    
    /* States */
    const [modules, setModules] = useState<State<Module>>(initialModules);
    const [semesters, setSemesters] = useState<State<Semester>>(initialSemesters);
    const [slots, setSlots] = useState<State<Slot>>(initialSlots);

    // Record of {[slotId]: activeSemesterId}
    const [activeSemestersBySlot, setActiveSemestersBySlot] = useState<Record<Id, Id>>(initialActiveSemestersBySlot);

    /* Actions */
    const setActiveSemester = (slotId: Id, semesterId: Id) => {
        setActiveSemestersBySlot((prev) => ({
            ...prev,
            [slotId]: semesterId,
        }));
    }

    const getActiveSemester = (slotId: Id): Id | null => {
        return activeSemestersBySlot[slotId] || null;
    }

    const noop = () => { };

    const addSlot = (slot: Slot) => {
        setSlots((prev) => ({
            byId: {
                ...prev.byId,
                [slot.id]: slot,
            },
            allIds: [...prev.allIds, slot.id],
        }));
        console.log("Added slot:", slot);
    };

    const addSemester = (targetSlotId: Id, semester: Semester) => {
        setSemesters((prev) => ({
            byId: {
                ...prev.byId,
                [semester.id]: semester,
            },
            allIds: [...prev.allIds, semester.id],
        }));
        setSlots((prev) => ({
            ...prev,
            byId: {
                ...prev.byId,
                [targetSlotId]: {
                    ...prev.byId[targetSlotId],
                    semesterIds: [
                        ...prev.byId[targetSlotId].semesterIds,
                        semester.id,
                    ],
                },
            },
            allIds: prev.allIds,
        }));
    };

    const addModule = (targetSemesterId: Id, module: Module) => {
        setModules((prev) => ({
            byId: {
                ...prev.byId,
                [module.id]: module,
            },
            allIds: [...prev.allIds, module.id],
        }));
        setSemesters((prev) => ({
            ...prev,
            byId: {
                ...prev.byId,
                [targetSemesterId]: {
                    ...prev.byId[targetSemesterId],
                    moduleIds: [
                        ...prev.byId[targetSemesterId].moduleIds,
                        module.id,
                    ],
                },
            },
            allIds: prev.allIds,
        }));
    };

    return (
        <AppContext.Provider
            value={
                {
                    slots: slots,
                    semesters: semesters,
                    modules: modules,
                    addSlot: addSlot,
                    addSemester: addSemester,
                    addModule: addModule,
                    setActiveSemester: setActiveSemester,
                    getActiveSemester: getActiveSemester,
                } as IAppContext
            }
        >
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                    <SlotList />
                </div>
                <div>
                    <Dashboard
                        totalCredits={60}
                        totalGoal={120}
                        useOverflowForProfile={false}
                        onToggleOverflowForProfile={noop}
                    />
                </div>
            </div>
        </AppContext.Provider>
    );
}
