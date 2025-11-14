import { React, useState } from "react";
import { Semester, type Slot } from "../model/types";
import SemesterList from "./SemesterList";

interface SlotListProps {
    slots: Slot[];
    handleAddSemester: (slot: Slot, semester: Semester) => void;
}

function SlotList({ slots, handleAddSemester }: SlotListProps) {
    return (
        <div className="flex flex-col gap-4">
            {slots.map((slot, idx) => (
                <div key={slot.id} className="p-4 bg-gray rounded-lg shadow-xl">
                    <div className="flex items-center justify-between">
                        <div>
                            {slot.term} {slot.year}
                            <SemesterList slot={slot} handleAddSemester={handleAddSemester} />
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default SlotList;
