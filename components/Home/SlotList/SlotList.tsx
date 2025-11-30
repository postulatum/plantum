import { React, useState } from "react";
import { Semester, Module, Slot, ID } from "../../../model/types";
import SemesterList from "./SemesterList/SemesterList";
import {newSlot} from "../../../utils/factory";
import SlotCard from "./SlotCard";
import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";



function SlotList() {
    const {slots, addSlot} = useContext(AppContext);
    
    function onAddSlot(slot: Slot) {
        addSlot(slot);
    }
    return (
        <div>
        <div className="flex flex-col gap-4">
            {slots.allIds.map((slotId, _) => (
                <SlotCard key={slotId} slot={slots.byId[slotId]} />
            ))}
        </div>
        <div>
             <button
                    type="button"
                    onClick={() => onAddSlot(newSlot(2028, "SoSe"))}
                    className="mt-2 inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-tum-blue hover:bg-tum-blue-dark transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    Neuen Slot hinzufügen
                </button>
        </div>
        </div>
    );
}

export default SlotList;
