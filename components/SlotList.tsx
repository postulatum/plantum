import React from "react";
import type { Slot } from "../model/types";
import SlotView from "./SlotView";

interface SlotListProps {
    slots: Slot[];
}

const SlotList: React.FC<SlotListProps> = ({ slots }) => {
    return (
        <div className="flex flex-col gap-4">
            {slots.map((slot, idx) => (
                <div key={`${slot.term}_${slot.year}`} className="p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            {slot.term} {slot.year}
                            <SlotView semesters={slot.semesters} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SlotList;
