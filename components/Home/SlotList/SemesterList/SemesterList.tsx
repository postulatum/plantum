import React, { useState } from "react";
import { Semester } from "@/model/semester";
import { Id } from "@/model/id";
import SemesterCard from "./SemesterCard";
import { AppContext } from "@/components/Home/AppContext";

interface SemesterListProps {
    slotId: Id;
    semesterIds: Id[];
}

function SemesterList({ slotId, semesterIds }: SemesterListProps) {
    // TODO: Later use ActivatedState to choose a semester
    const [activeSemesterId, setActiveSemesterId] = useState<string | null>(
        null,
    );
    const { addSemester, semesters } = React.useContext(AppContext);

    const onAddSemester = () => {
        const semester: Semester = {
            id: crypto.randomUUID(),
            name: "Neues Semester",
            moduleIds: [],
        };
        addSemester(slotId, semester);
    };

    return (
        <div className="overflow-y-auto">
            {semesterIds.length === 0 ? (
                <div className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg">
                    <p className="text-gray-500 text-sm">
                        Keine Semester in diesem Slot.
                    </p>
                </div>
            ) : (
                <div className="flex flex-row gap-4">
                    {semesterIds.map((semesterId, _) => (
                        <SemesterCard
                            semester={semesters.byId[semesterId]}
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
}

export default SemesterList;
