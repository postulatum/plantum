import React, { useState, useEffect, useMemo } from "react";
import type { Module, Term } from "./model/types";
import { Area, AreaCategory, Category, Semester } from "./model/types";
import {
    TOTAL_CREDITS_GOAL,
    CATEGORY_GOALS,
    LOCAL_STORAGE_KEYS,
    GLOBAL_APP_VERSION,
} from "./data/constants";
import { newModule, newSemester } from "./utils/factory";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home/Home"
// import ModuleList from "./components/ModuleList";
// import Dashboard from "./components/Dashboard";
// import Overview from "./components/Overview";
// import SemesterManager from "./components/SemesterManager";
import { Slot } from "./model/types";
// import SlotList from "./components/SlotList";
// import ModuleForm from "./components/ModuleForm";
import {
    loadFromLocalStorage,
    saveToLocalStorage,
} from "./services/localStorageService";

type View = "planner" | "overview";

const App: React.FC = () => {
    const handleExport = () => {
        const data = {
            GLOBAL_APP_VERSION,
            modules,
            semesters,
            exportDate: new Date().toISOString(),
        };

        const jsonString = JSON.stringify(data, null, 2);
        const blob = new Blob([jsonString], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `master-planer-backup-${new Date().toISOString().split("T")[0]}.json`;
        link.click();
        URL.revokeObjectURL(url);
    };

    const handleImport = (file: File) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const content = e.target?.result as string;
                const data = JSON.parse(content);

                if (data.modules && Array.isArray(data.modules)) {
                    const isConfirmed = window.confirm(
                        "Möchten Sie die aktuellen Daten wirklich mit den importierten Daten ersetzen? Diese Aktion kann nicht rückgängig gemacht werden.",
                    );

                    if (isConfirmed) {
                        setModules(data.modules);
                        if (data.semesters && Array.isArray(data.semesters)) {
                            setSemesters(data.semesters);
                        }
                        alert("Daten erfolgreich importiert!");
                    }
                } else {
                    alert(
                        'Ungültige JSON-Datei. Die Datei muss ein "modules"-Array enthalten.',
                    );
                }
            } catch (error) {
                console.error("Import error:", error);
                alert(
                    "Fehler beim Importieren der Datei. Bitte stellen Sie sicher, dass es sich um eine gültige JSON-Datei handelt.",
                );
            }
        };
        reader.readAsText(file);
    };

    const addModule = (v) => { console.log(v); }
    const updateModule = (v) => { console.log(v); }
    const handleCancelEdit = (v) => { console.log(v); }
    const editingModule = {}


    const testModule: Module = newModule("Testmodul", 5, Area.ALG, true);
    const testSemester: Semester = newSemester("Testsemester", [testModule]);

    // TODO: Remove Dummy slots
    const [slots, setSlots] = useState<Slot[]>([
        { id: crypto.randomUUID(), year: 2025, term: "WiSe", semesters: [testSemester] },
        { id: crypto.randomUUID(), year: 2026, term: "SoSe", semesters: [] },
    ]);

    function handleAddSlot(term: Term) {
        const newSlot: Slot = {
            id: crypto.randomUUID(),
            year: new Date().getFullYear(),
            term,
            semesters: [],
        };
        setSlots(prevSlots => [...prevSlots, newSlot]);
    }

    function handleAddSemester(slot: Slot, semester: Semester) {
        const updatedSlot: Slot = { ...slot, semesters: [...slot.semesters, semester] };
        setSlots(prevSlots => prevSlots.map(sl => sl.id === slot.id ? updatedSlot : sl));
    }

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            <Header onExport={handleExport} onImport={handleImport} />

            <Home />

            <Footer />
        </div>
    );
};

export default App;
