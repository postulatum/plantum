import React, { useState } from "react";
import type { Slot, Semester, Module, ID } from "../../../../model/types";
import { modules } from "@/data/modules/modules";
import { AppContext } from "../../AppContext";


interface SemesterCardProps {
    semester: Semester;
}

function SemesterCard({ semester}: SemesterCardProps) {
    const { modules } = React.useContext(AppContext)!;

    const moduleList = semester.moduleIds.map((moduleId) => modules.byId[moduleId]);
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
