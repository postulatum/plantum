import { React, useState } from "react";
import { Semester, type Slot } from "../model/types";
import SemesterList from "./SemesterList";

interface SlotListProps {
    slots: Slot[];
    handleAddSemester: (slot: Slot, semester: Semester) => void;
}

function SlotList({ slots, handleAddSemester }: SlotListProps) {
    function onAddSemester(semesterName: string, slot: Slot) {
        const newSemester: Semester = { id: crypto.randomUUID(), name: semesterName, modules: [] };
        handleAddSemester(slot, newSemester);
    }
    return (
        <div className="flex flex-col gap-4">
            {slots.map((slot, idx) => (
                <div key={slot.id} className="p-4 bg-gray rounded-lg shadow-xl flex-row">
                    <div className="flex-col">
                        <div className="text-xl font-semibold mb-2">
                            {slot.term} {slot.year}
                        </div>
                        <SemesterList slot={slot} />
                        <button
                            type="button"
                            onClick={() => onAddSemester("Neues Semester", slot)}
                            className="self-start inline-block px-3 py-1 text-sm bg-blue-600 text-white rounded mt-2 hover:bg-blue-700"
                        >
                            Neues Semester hinzufügen
                        </button>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default SlotList;
