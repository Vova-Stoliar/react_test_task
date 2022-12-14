export const getTitleToSearch = () => {
    const { location } = window;

    return location.search.split('?title=').at(-1) ?? '';
};
