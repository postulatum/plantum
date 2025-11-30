import React, { useState } from "react";
import type { Slot, Semester, Module, ID } from "../../../../model/types";


interface SemesterCardProps {
    semester: Semester;
    modules: Module[];
    parentOnAddModule: (semesterId: ID, module: Module) => void;
}

function SemesterCard({ semester, modules, parentOnAddModule }: SemesterCardProps) {
    const moduleList = modules.filter(module => semester.moduleIds.includes(module.id));
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
