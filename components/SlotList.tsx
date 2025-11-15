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
                            className="mt-2 inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-tum-blue hover:bg-tum-blue-dark transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
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
