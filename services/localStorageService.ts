/**
 * Wrapper around local storage.
 */
export const save = (key: string, data: any) => {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.error("Failed to save data to local storage: ", error);
    }
};

/**
 * Wrapper around local storage.
 */
export const load = (key: string) => {
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
