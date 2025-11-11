import React from "react";
import type { Semester, Slot } from "../model/types";

interface SlotViewProps {
    semesters: Semester[];
}

const SlotView: React.FC<SlotViewProps> = ({ semesters }) => {
    if (semesters.length === 0) {
        return <p className="text-gray-500 text-sm">Keine Semester in diesem Slot.</p>;
    }
    return (
        <div className="flex flex-row gap-4">
            {semesters.map((semester, idx) => (
                <div key={semester.id} className="p-4 bg-white rounded-lg shadow-sm">
                            {semester.name}
                </div>
            ))}
        </div>
    );
};

export default SlotView;
