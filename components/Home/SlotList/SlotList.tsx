import { React, useState } from "react";
import { Semester, Module, Slot, ID } from "../../../model/types";
import SemesterList from "./SemesterList/SemesterList";
import {newSlot} from "../../../utils/factory";
import SlotCard from "./SlotCard";




interface SlotListProps {
    slots: Slot[];
    semesters: Semester[];
    modules: Module[];
    parentOnAddSemester: (slotId: ID, semester: Semester) => void;
    parentOnAddModule: (semesterId: ID, module: Module) => void;
    parentOnAddSlot: (slot: Slot) => void;
}

function SlotList({ slots, semesters, modules, parentOnAddSemester, parentOnAddModule, parentOnAddSlot }: SlotListProps) {
    function onAddSemester(slotId: ID, semester: Semester) {
        parentOnAddSemester(slotId, semester);
    }
    function onAddModule(semesterId: ID, module: Module) {
        parentOnAddModule(semesterId, module);
    }
    function onAddSlot(slot: Slot) {
        parentOnAddSlot(slot);
    }
    return (
        <div>
        <div className="flex flex-col gap-4">
            {slots.map((slot, idx) => (
                <SlotCard
                    slot={slot}
                    semesters={semesters}
                    modules={modules}
                    parentOnAddSemester={onAddSemester}
                    parentOnAddModule={onAddModule}
                />
            ))}
        </div>
        <div>
             <button
                    type="button"
                    onClick={() => onAddSlot(newSlot(2028, "SoSe"))}
                    className="mt-2 inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-tum-blue hover:bg-tum-blue-dark transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    Neuen Slot hinzufügen
                </button>
        </div>
        </div>
    );
}

export default SlotList;
