import SlotList from "./SlotList/SlotList";
import Dashboard from "./Dashboard/Dashboard";
import { Slot, Area } from "../../model/types";
import { useState } from "react";

export default function Home() {
    let initialSlots: Slot = [
        {
            id: "askdhg-asdgjhashjdgl-asjhdg",
            year: 2026,
            term: "WiSe",
            semesters: [
                {
                    id: "askdhg-asdgjhashjdgl-asjhdg",
                    name: "The semester of despair",
                    modules: [
                        {
                            id: "askdhg-asdgjhashjdgl-asjhdg",
                            name: "Some weird module",
                            credits: 8,
                            area: Area.FMA,
                            isTheoretical: true,
                        },
                    ],
                },
            ],
        },
        {
            id: "alksdhgoiaus-asopdiukajsdhg-asdjghakjshdg",
            year: 2027,
            term: "SoSe",
            semesters: [],
        },
    ];

    const [slots, setSlots] = useState(initialSlots);
    const noop = () => {};

    // 1. The central function that handles the deep update
    const onAddSemester = (targetSlotId, newSemester) => {
        // We use setSlots with a function to get the latest state (prevSlots)
        setSlots((prevSlots) =>
            prevSlots.map((slot) => {
                // Find the specific slot to update
                if (slot.id === targetSlotId) {
                    // A. Create a NEW semesters array with the new semester appended
                    const newSemesters = [...slot.semesters, newSemester];

                    // B. Return a NEW slot object using the spread operator
                    return {
                        ...slot,
                        semesters: newSemesters, // Assign the new array
                    };
                }
                // For all other slots, return the original reference
                return slot;
            }),
        );
    };
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
                <SlotList slots={slots} onAddSemester={onAddSemester} />
            </div>
            <div>
                <Dashboard
                    totalCredits={60}
                    totalGoal={120}
                    useOverflowForProfile={false}
                    onToggleOverflowForProfile={noop}
                />
            </div>
        </div>

        //                 <ModuleForm
        //                     onAddModule={addModule}
        //                     onUpdateModule={updateModule}
        //                     onCancelEdit={handleCancelEdit}
        //                     editingModule={editingModule}
        //                 />
    );
}
