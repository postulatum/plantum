import React, { useState } from "react";
import type { Slot, Semester } from "../../../model/types";
import SemesterCard from "./SemesterCard";

function SemesterList({ semesters, parentOnAddSemester }) {
    // TODO: Later use ActivatedState to choose a semester
    const [activeSemesterId, setActiveSemesterId] = useState<string | null>(null);

    const onAddSemester = () => {
        const semester = {
            id: "SOMEID",
            name: "Neues Semester",
            modules: []
        };
        parentOnAddSemester(semester);
    }

    return (
        <div className="overflow-y-auto">
            {semesters.length === 0 ? (
                <div className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg">
                    <p className="text-gray-500 text-sm">Keine Semester in diesem Slot.</p>
                </div>
            ) : (
                <div className="flex flex-row gap-4">
                    {semesters.map((semester, idx) => (
                        <SemesterCard key={semester.id} semester={semester} />
                    ))}
                </div>
            )}

                <button
                    type="button"
                    onClick={() => onAddSemester()}
                    className="mt-2 inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-tum-blue hover:bg-tum-blue-dark transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    Neues Semester hinzufügen
                </button>
        </div>
    );
};

export default SemesterList;
