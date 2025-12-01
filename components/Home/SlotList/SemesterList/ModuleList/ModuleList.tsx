import { Id } from '@/model/id';
import React from 'react';
import { AppContext } from '../../../../Home/AppContext';

interface ModuleListProps {
    moduleIds: Id[];
}


function ModuleList({ moduleIds }: ModuleListProps) {
    const { modules } = React.useContext(AppContext)!;

    return (<div className="mt-4">
        {moduleIds.length === 0 ? (
            <p className="text-gray-500 text-sm">
                Keine Module in diesem Semester.
            </p>
        ) : (
            <ul className="list-disc list-inside">
                {moduleIds.map((moduleId) => (
                    <li key={moduleId} className="text-gray-800">
                        {modules.byId[moduleId].name} ({modules.byId[moduleId].credits} ECTS)
                    </li>
                ))}
            </ul>
        )}
    </div>)
}

export default ModuleList;