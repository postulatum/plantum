import React from "react";
import { AppContext } from "@/components/Home/AppContext";
import { Semester } from "@/model/semester";
import ModuleList from "./ModuleList/ModuleList";

interface SemesterCardProps {
    semester: Semester;
    isActive: boolean;
    handleToggleActive: () => void;
}
1
function SemesterCard({ semester, isActive, handleToggleActive }: SemesterCardProps) {

    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div className="flex flex-col gap-2 relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered && (
                <div className="absolute top-2 right-2">
                    <input
                        type="checkbox"
                        checked={isActive}
                        onChange={handleToggleActive}
                        className="w-5 h-5 cursor-pointer"
                    />
                </div>
            )}
            <div
                key={semester.id}
                className={`p-4 bg-white rounded-lg shadow-sm border-2 ${isActive ? 'border-tum-blue' : 'border-transparent'}`}
            >
                {semester.name}
                <ModuleList moduleIds={semester.moduleIds} />
            </div>
        </div>
    );
}

export default SemesterCard;
