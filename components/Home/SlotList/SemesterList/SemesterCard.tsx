import React, { useState } from "react";
import { modules } from "@/data/modules/modules";
import { AppContext } from "../../AppContext";
import { Semester } from "@/model/semester";
import ModuleList from "./ModuleList/ModuleList";

interface SemesterCardProps {
    semester: Semester;
}

function SemesterCard({ semester }: SemesterCardProps) {
    const { modules } = React.useContext(AppContext)!;

    const moduleList = semester.moduleIds.map(
        (moduleId) => modules.byId[moduleId],
    );
    return (
        <div className="flex flex-col gap-2">
            <div
                key={semester.id}
                className="p-4 bg-white rounded-lg shadow-sm"
            >
                {semester.name}
                <ModuleList moduleIds={semester.moduleIds} />
            </div>
        </div>
    );
}

export default SemesterCard;
