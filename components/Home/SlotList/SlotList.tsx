import { React, useState } from "react";
import { Semester, type Slot } from "../../model/types";
import SemesterList from "./SemesterList/SemesterList";
import SlotCard from "./SlotCard";

function SlotList({ slots, parentOnAddSemester }) {
    function onAddSemester(slotId, semester) {
        parentOnAddSemester(slotId, semester);
    }

    return (
        <div className="flex flex-col gap-4">
            {slots.map((slot, idx) => (
                <SlotCard key={slot.id} slot={slot} onAddSemester={onAddSemester} />
            ))}
        </div>
    );
}

export default SlotList;
