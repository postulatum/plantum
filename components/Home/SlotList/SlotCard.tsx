import React, { useState } from "react";
import type { Slot, Semester } from "../../../model/types";
import SemesterList from "./SemesterList/SemesterList";

function SlotCard({ slot, parentOnAddSemester }) {

    const onAddSemester = (semester) => {
        parentOnAddSemester(slot.id, semester);
    }

    return (
        <div
            key={slot.id}
            className="p-4 bg-gray rounded-lg shadow-xl flex-row"
        >
            <div className="flex-col">
                <div className="text-xl font-semibold mb-2">
                    {slot.term} {slot.year}
                </div>
                <SemesterList
                    semesters={slot.semesters}
                    onAddSemester={onAddSemester}
                />
            </div>
        </div>
    );
};

export default SlotCard;
