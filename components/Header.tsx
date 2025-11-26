import React from "react";
import { FaGithub } from "react-icons/fa";

const PlantumLogo = () => (
    <>
        <img src="assets/logo_white.svg" height="46" width="32" />
        <h1 style={{marginLeft: 0}} className="text-xl md:text-3xl font-bold text-white tracking-tight">
           lanTUM 
        </h1>
    </>
);

interface HeaderProps {
    onExport?: () => void;
    onImport?: (file: File) => void;
}

const Header: React.FC<HeaderProps> = ({ onExport, onImport }) => {
    const handleImportClick = () => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = ".json";
        input.onchange = (e) => {
            const file = (e.target as HTMLInputElement).files?.[0];
            if (file && onImport) {
                onImport(file);
            }
        };
        input.click();
    };
    return (
        <header className="bg-tum-blue shadow-md">
            <div className="container mx-auto px-4 py-4 md:px-8 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <PlantumLogo />
                </div>
                <div className="flex items-center space-x-4">
                    {onExport && (
                        <button
                            onClick={onExport}
                            className="bg-white text-tum-blue px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
                            title="Daten als JSON exportieren"
                        >
                            Exportieren
                        </button>
                    )}
                    {onImport && (
                        <button
                            onClick={handleImportClick}
                            className="bg-white text-tum-blue px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
                            title="Daten aus JSON importieren"
                        >
                            Importieren
                        </button>
                    )}
                    <a
                        href="https://github.com/postulatum/plantum"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-200 transition-colors"
                        title="GitHub Repository"
                    >
                        <FaGithub size={24} />
                    </a>
                    <div className="text-white text-sm hidden md:block">
                        Für Master Informatik @ TUM
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
