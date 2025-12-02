import React, { useMemo } from "react";

import { GLOBAL } from "@/data/constants";
import { Category } from "@/model/category";
import ProgressCard from "./ProgressCard";

const InfoIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 inline mr-2 text-tum-blue"
        viewBox="0 0 20 20"
        fill="currentColor"
    >
        <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
        />
    </svg>
);

interface DashboardProps {
    totalCredits: number;
    totalGoal: number;
    useOverflowForProfile: boolean;
    onToggleOverflowForProfile: () => void;
}

/**
 * The main component. The dashboard houses the slot list and the overview over the progress.
 */
const Dashboard = ({
    totalCredits,
    totalGoal,
    useOverflowForProfile,
    onToggleOverflowForProfile,
}: DashboardProps) => {
    const orderedCategories = [...GLOBAL.GOALS.keys()];

    return (
        <div className="space-y-6">
            <ProgressCard
                title="Gesamtfortschritt Master"
                currentValue={totalCredits}
                goalValue={totalGoal}
                isPrimary={true}
            />

            <div className="p-4 bg-blue-50 border-l-4 border-tum-blue rounded-r-lg">
                <h4 className="font-semibold text-tum-blue-dark flex items-center">
                    <InfoIcon /> Regel für Informatik-Module
                </h4>
                <p className="text-xs text-gray-600 mt-2">
                    Der Schwerpunkt ist das Fachgebiet mit den meisten Credits.
                </p>
                <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
                    <li className="text-gray-800">"nicht erfüllt"</li>
                    <li className="text-gray-800">
                        Mindestens <strong>8 ECTS</strong> in zwei weiteren
                        Fachgebieten nicht erfüllt.
                    </li>
                </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                {orderedCategories.map((category) => (
                    <ProgressCard
                        title={category}
                        currentValue={0}
                        goalValue={GLOBAL.GOALS[category]}
                    />
                ))}
                <ProgressCard
                    title={Category.PROFILE}
                    currentValue={3}
                    goalValue={GLOBAL.GOALS[Category.PROFILE]}
                />
                <ProgressCard
                    title="Theoretische Informatik"
                    currentValue={2}
                    goalValue={10}
                />
                <ProgressCard
                    title={Category.ELECTIVE}
                    currentValue={1}
                    goalValue={GLOBAL.GOALS[Category.ELECTIVE]}
                />
            </div>

            {/* Gray separator line before overflow credits */}
            {
                <div className="border-t-2 border-gray-300 pt-6">
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="text-lg font-semibold text-gray-700">
                                Überflüssige Credits
                            </h3>
                            <span className="font-bold text-gray-600">
                                {10} ECTS
                            </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                            Credits über die 43 ECTS Grenze für Informatik
                            Wahlmodule hinaus.
                        </p>
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={useOverflowForProfile}
                                onChange={onToggleOverflowForProfile}
                                className="w-5 h-5 text-tum-blue rounded focus:ring-tum-blue focus:ring-2"
                            />
                            <span className="text-sm text-gray-700">
                                Bis zu 10 Credits als Profilbildung verwenden
                                `(${0} ECTS werden verwendet)`
                            </span>
                        </label>
                    </div>
                </div>
            }

            {false && (
                <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">
                        Details: Informatik-Fachgebiete
                    </h3>
                    <div className="space-y-2">
                        <div
                            className={`p-3 bg-white rounded-lg shadow-sm text-sm`}
                        >
                            <div className="flex justify-between items-center">
                                <span className="font-medium text-gray-800">
                                    {" "}
                                </span>
                                <span className="font-bold text-tum-blue-dark">
                                    {0} ECTS
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
