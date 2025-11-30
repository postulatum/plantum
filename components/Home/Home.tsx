import SlotList from "./SlotList/SlotList";
import Dashboard from "./Dashboard/Dashboard";
import { Slot, Semester, Module, Area, ID } from "../../model/types";
import { useState } from "react";

const moduleId1 = crypto.randomUUID();
const semesterId1 = crypto.randomUUID();
const slotId1 = crypto.randomUUID();
const slotId2 = crypto.randomUUID();
export default function Home() {
    
    // Normalized state: separate collections
    const [modules, setModules] = useState<Module[]>([
        {
            id: moduleId1,
            name: "Some weird module",
            credits: 8,
            area: Area.FMA,
            isTheoretical: true,
        },
    ]);

    const [semesters, setSemesters] = useState<Semester[]>([
        {
            id: semesterId1,
            name: "The semester of despair",
            moduleIds: [moduleId1],
        },
    ]);

    const [slots, setSlots] = useState<Slot[]>([
        {
            id: slotId1,
            year: 2026,
            term: "WiSe",
            semesterIds: [semesterId1],
        },
        {
            id: slotId2,
            year: 2027,
            term: "SoSe",
            semesterIds: [],
        },
    ]);

    const noop = () => {};


    const onAddSlot = (slot: Slot) => {
        setSlots((prev) => [...prev, slot]);
    }

    const onAddSemester = (targetSlotId: ID, semester: Semester) => {
        setSemesters((prev) => [...prev, semester]);
        setSlots((prev) =>
            prev.map((slot) =>
                slot.id === targetSlotId
                    ? { ...slot, semesterIds: [...slot.semesterIds, semester.id] }
                    : slot
            )
        );
    };

    const onAddModule = (targetSemesterId: ID, module: Module) => {
        setModules((prev) => [...prev, module]);
        setSemesters((prev) =>
            prev.map((semester) =>
                semester.id === targetSemesterId
                    ? { ...semester, moduleIds: [...semester.moduleIds, module.id] }
                    : semester
            )
        );
    };
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
                <SlotList
                    slots={slots}
                    semesters={semesters}
                    modules={modules}
                    parentOnAddSemester={onAddSemester}
                    parentOnAddModule={onAddModule}
                    parentOnAddSlot={onAddSlot}
                />
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

        //                 <ModuleForm
        //                     onAddModule={addModule}
        //                     onUpdateModule={updateModule}
        //                     onCancelEdit={handleCancelEdit}
        //                     editingModule={editingModule}
        //                 />
    );
}
