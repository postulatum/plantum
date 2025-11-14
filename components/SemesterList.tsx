import React, {useState} from "react";
import type { Slot, Semester } from "../model/types";
import SemesterCard from "./SemesterCard";

interface SemesterListProps {
    slot: Slot;
    handleAddSemester?: (slot: Slot, semester: Semester) => void;
}

function SemesterList({ slot, handleAddSemester }: SemesterListProps) {
    // TODO: Later use ActivatedState to choose a semester
    const [activeSemesterId, setActiveSemesterId] = useState<string | null>(null);

    function onAddSemester(semesterName: string) {
        const newSemester: Semester = { id: crypto.randomUUID(), name: semesterName, modules: [] };
        handleAddSemester(slot, newSemester);
    }

    return (
        <div className="flex flex-col gap-2">
            {slot.semesters.length === 0 ? (
                <p className="text-gray-500 text-sm">Keine Semester in diesem Slot.</p>
            ) : (
                <div className="flex flex-row gap-4">
                    {slot.semesters.map((semester, idx) => (
                        <SemesterCard semester={semester} />
                    ))}
                </div>
            )}
            <button
                type="button"
                onClick={() => onAddSemester("Neues Semester")}
                className="self-start inline-block px-3 py-1 text-sm bg-blue-600 text-white rounded"
            >
                Neues Semester hinzufügen
            </button>
        </div>
    );
};

export default SemesterList;
