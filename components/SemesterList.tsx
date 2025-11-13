import React, {useState} from "react";
import type { Slot, Semester } from "../model/types";

interface SemesterListProps {
    slot: Slot;
    handleAddSemester?: (slot: Slot, semester: Semester) => void;
}

const SemesterList: React.FC<SemesterListProps> = ({ slot, handleAddSemester }: SemesterListProps) => {
    // TODO: Later use ActivatedState to choose a semester
    const [activatedSemesterId, setActivatedSemesterId] = useState<string | null>(null);

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
                        <div key={semester.id} className="p-4 bg-white rounded-lg shadow-sm">
                            {semester.name}
                        </div>
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
