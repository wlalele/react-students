export const localStorageKey = 'my-app:state';

export const loadState = () => {
    try {
        let serializedState = localStorage.getItem(localStorageKey);
        if (serializedState === null) {
            return {};
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.log(err);
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(localStorageKey, serializedState);
    } catch (err) {
        console.error(err);
    }
};
