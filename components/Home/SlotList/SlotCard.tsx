import React, { useState } from "react";
import type { Slot, Semester, Module, ID } from "../../../model/types";
import SemesterList from "./SemesterList/SemesterList";

interface SlotCardProps {
    key: ID;
    slot : Slot;
}

function SlotCard({ slot } : SlotCardProps) {
    return (
        <div
           
            className="p-4 bg-gray rounded-lg shadow-xl flex-row"
        >
            <div className="flex-col">
                <div className="text-xl font-semibold mb-2">
                    {slot.term} {slot.year}
                </div>
                <SemesterList slotId={slot.id} semesterIds={slot.semesterIds}/>
            </div>
        </div>
    );
};

export default SlotCard;
