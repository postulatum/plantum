import React, { useState } from "react";
import type { Slot, Semester } from "../model/types";

interface SemesterCardProps {
    semester: Semester;
}


function SemesterCard({ semester }: SemesterCardProps) {
    // TODO: Later use ActivatedState to choose a semester

    const [moduleList, setModuleList] = useState<Semester>(semester.modules);

    return (
        <div className="flex flex-col gap-2">
            <div key={semester.id} className="p-4 bg-white rounded-lg shadow-sm">
                {semester.name}
                <div className="mt-4">
                    {moduleList.length === 0 ? (
                        <p className="text-gray-500 text-sm">Keine Module in diesem Semester.</p>
                    ) : (
                        <ul className="list-disc list-inside">
                            {moduleList.map((module) => (
                                <li key={module.id} className="text-gray-800">
                                    {module.name} ({module.credits} ECTS)
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SemesterCard;
