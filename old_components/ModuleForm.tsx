import React, { useState, useEffect, useMemo } from "react";
import { Module, Area } from "../model/types";

const EditIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-tum-blue"
        viewBox="0 0 20 20"
        fill="currentColor"
    >
        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
    </svg>
);

interface ModuleFormProps {
    onAddModule: (module: Omit<Module, "id">) => void;
    onUpdateModule?: (module: Module) => void;
    onCancelEdit?: () => void;
    editingModule: Partial<Module>;
}

const ModuleForm: React.FC<ModuleFormProps> = ({
    onAddModule,
    onUpdateModule,
    onCancelEdit,
    editingModule,
}) => {
    const [name, setName] = useState("");
    const nameChangeHandler = (name: string) => {
        name.trim();
        setName(name);
    };

    const [credits, setCredits] = useState("");
    const [area, setArea] = useState(Area.MISC);
    const [isTheoretical, setIsTheoretical] = useState(false);

    // Formular mit Werten aus editingModule füllen
    useEffect(() => {
        if (editingModule) {
            setName(editingModule.name || "");
            setCredits(editingModule.credits || 0);
            setArea(editingModule.area || Area.MISC);
            setIsTheoretical(editingModule.isTheoretical || false);
        } else {
            // Formular zurücksetzen wenn kein editingModule
            setName("");
            setCredits(0);
            setArea(Area.MISC);
            setIsTheoretical(false);
        }
    }, [editingModule]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const creditValue = parseInt(credits, 10);
        if (!name.trim() || isNaN(creditValue) || creditValue <= 0) {
            alert(
                "Bitte geben Sie einen gültigen Modulnamen und eine positive Credit-Anzahl an.",
            );
            return;
        }

        const moduleData = {
            name,
            credits: creditValue,
            area,
            isTheoretical,
        };

        if (editingModule && onUpdateModule) {
            // Update existierendes Modul
            onUpdateModule({ ...editingModule, ...moduleData });
        } else {
            // Neues Modul hinzufügen
            onAddModule(moduleData);
        }

        // Formular zurücksetzen
        setName("");
        setCredits(0);
        setArea(Area.MISC);
        setIsTheoretical(false);
    };

    const handleCancel = () => {
        setName("");
        setCredits(0);
        setArea(Area.MISC);
        setIsTheoretical(false);
        if (onCancelEdit) {
            onCancelEdit();
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="p-6 bg-white rounded-lg shadow-md space-y-4"
        >
            {editingModule && (
                <div className="bg-blue-50 border-l-4 border-tum-blue p-4 mb-4">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <EditIcon />
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-blue-800">
                                Modul bearbeiten
                            </p>
                        </div>
                    </div>
                </div>
            )}
            <fieldset>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label
                            htmlFor="module-name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Modulname
                        </label>
                        <input
                            type="text"
                            id="module-name"
                            value={name || ""}
                            onChange={(e) => nameChangeHandler(e.target.value)}
                            placeholder="z.B. Advanced Deep Learning"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-tum-blue focus:border-tum-blue disabled:bg-gray-100"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="module-credits"
                            className="block text-sm font-medium text-gray-700"
                        >
                            ECTS Credits
                        </label>
                        <input
                            type="number"
                            id="module-credits"
                            value={credits || 0}
                            onChange={(e) => setCredits(e.target.value)}
                            placeholder="z.B. 5"
                            min="1"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-tum-blue focus:border-tum-blue disabled:bg-gray-100"
                            required
                        />
                    </div>
                </div>

                <div className="pt-2 pb-4">
                    <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                            <input
                                id="is-theoretical"
                                aria-describedby="is-theoretical-description"
                                name="is-theoretical"
                                type="checkbox"
                                checked={isTheoretical || false}
                                onChange={(e) =>
                                    setIsTheoretical(e.target.checked)
                                }
                                className="focus:ring-tum-blue h-4 w-4 text-tum-blue border-gray-300 rounded"
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label
                                htmlFor="is-theoretical"
                                className="font-medium text-gray-700"
                            >
                                Theoretisches Modul
                            </label>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label
                            htmlFor="module-area"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Fachgebiet
                        </label>
                        <select
                            id="module-area"
                            value={area}
                            onChange={(e) => setArea(e.target.value)}
                            className="mt-1 block w-full pl-3 pr-10 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-tum-blue focus:border-tum-blue sm:text-sm disabled:bg-gray-100"
                        >
                            {Object.keys(Area).map((area) => (
                                <option key={area} value={Area[area]}>
                                    {area}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="flex justify-end pt-2 space-x-3">
                    {editingModule && (
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="inline-flex justify-center py-2 px-6 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tum-blue transition-colors"
                        >
                            Abbrechen
                        </button>
                    )}
                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-tum-blue hover:bg-tum-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tum-blue transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        {editingModule ? "Speichern" : "Hinzufügen"}
                    </button>
                </div>
            </fieldset>

            <p className="text-sm text-center text-red-600">
                Bitte fügen Sie zuerst ein Semester hinzu, um Module erfassen zu
                können.
            </p>
        </form>
    );
};

export default ModuleForm;
