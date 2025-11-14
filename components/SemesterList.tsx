import React, { useState } from "react";
import type { Slot, Semester } from "../model/types";
import SemesterCard from "./SemesterCard";

interface SemesterListProps {
    slot: Slot;
}

function SemesterList({ slot }: SemesterListProps) {
    // TODO: Later use ActivatedState to choose a semester
    const [activeSemesterId, setActiveSemesterId] = useState<string | null>(null);

    return (
        <div>
            {slot.semesters.length === 0 ? (
                <div className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg">
                    <p className="text-gray-500 text-sm">Keine Semester in diesem Slot.</p>
                </div>
            ) : (
                <div className="flex flex-row gap-4">
                    {slot.semesters.map((semester, idx) => (
                        <SemesterCard semester={semester} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default SemesterList;
