import React, { useState } from "react";
import type { Slot, Semester, Module, ID } from "../../../model/types";
import SemesterList from "./SemesterList/SemesterList";

interface SlotCardProps {
    slot: Slot;
    semesters: Semester[];
    modules: Module[];
    parentOnAddSemester: (slotId: ID, semester: Semester) => void;
    parentOnAddModule: (semesterId: ID, module: Module) => void;
}

function SlotCard({ slot, semesters, modules, parentOnAddSemester, parentOnAddModule }: SlotCardProps) {
    // Filter semesters that belong to this slot
    const slotSemesters = semesters.filter(sem => slot.semesterIds.includes(sem.id));

    const onAddSemester = (semester: Semester) => {
        parentOnAddSemester(slot.id, semester);
    }

    function onAddModule(semesterId: ID, module: Module) {
        parentOnAddModule(semesterId, module);
    }

    return (
        <div
            key={slot.id}
            className="p-4 bg-gray rounded-lg shadow-xl flex-row"
        >
            <div className="flex-col">
                <div className="text-xl font-semibold mb-2">
                    {slot.term} {slot.year}
                </div>
                <SemesterList
                    semesters={slotSemesters}
                    modules={modules}
                    parentOnAddSemester={onAddSemester}
                    parentOnAddModule={onAddModule}
                />
            </div>
        </div>
    );
};

export default SlotCard;
