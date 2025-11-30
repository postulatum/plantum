import React, { useState } from "react";
import { Slot } from "../../model/slot";
import { Id } from "../../model/id";
import SemesterList from "./SemesterList/SemesterList";

interface SlotCardProps {
    key: Id;
    slot: Slot;
}

function SlotCard({ slot }: SlotCardProps) {
    return (
        <div className="p-4 bg-gray rounded-lg shadow-xl flex-row">
            <div className="flex-col">
                <div className="text-xl font-semibold mb-2">
                    {slot.term} {slot.year}
                </div>
                <SemesterList slotId={slot.id} semesterIds={slot.semesterIds} />
            </div>
        </div>
    );
}

export default SlotCard;
