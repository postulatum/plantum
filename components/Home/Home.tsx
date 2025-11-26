import SlotList from "./SlotList/SlotList";
import Dashboard from "./Dashboard/Dashboard";
import { Slot, Area } from "../../model/types";

export default function Home() {
    let slots: Slot = [
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
    const noop = () => {};

    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
                <SlotList slots={slots} handleAddSemester={noop} />
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
