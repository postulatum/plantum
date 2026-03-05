/**
 * Store values to local storage.
 */
export class LocalStorage {
    /**
     * Wrapper around local storage.
     */
    public static save (key: string, data: any) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (error) {
            console.error("Failed to save data to local storage: ", error);
        }
    };

    /**
     * Wrapper around local storage.
     */
    public static load (key: string) {
        const storedData = localStorage.getItem(key);

        if (!storedData) {
            return null;
        }

        try {
            const parsedData = JSON.parse(storedData);
            return parsedData;
        } catch (error) {
            console.error("Failed to load data from local storage: ", error);
            return null;
        }
    };
}

