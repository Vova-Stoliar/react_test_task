export const debounce = (() => {
    let timer: NodeJS.Timeout;

    return (callback: () => void, delay = 500) => {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback();
        }, delay);
    };
})();
