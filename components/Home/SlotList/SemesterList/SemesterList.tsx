import React, { useState } from "react";
import type { Semester, Module, ID } from "../../../../model/types";
import SemesterCard from "./SemesterCard";

interface SemesterListProps {
    semesters: Semester[];
    modules: Module[];
    parentOnAddSemester: (semester: Semester) => void;
    parentOnAddModule: (semesterId: ID, module: Module) => void;
}

function SemesterList({ semesters, modules, parentOnAddSemester, parentOnAddModule }: SemesterListProps) {
    // TODO: Later use ActivatedState to choose a semester
    const [activeSemesterId, setActiveSemesterId] = useState<string | null>(null);

    const onAddSemester = () => {
        const semester: Semester = {
            id: crypto.randomUUID(),
            name: "Neues Semester",
            moduleIds: []
        };
        parentOnAddSemester(semester);
    }

    const onAddModule = (semesterId: ID, module: Module) => {
        parentOnAddModule(semesterId, module);
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
                        <SemesterCard
                            semester={semester}
                            modules={modules}
                            parentOnAddModule={onAddModule}
                        />
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
