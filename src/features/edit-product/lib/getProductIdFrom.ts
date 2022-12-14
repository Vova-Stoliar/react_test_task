export const getProductIdFrom = (url: string) => {
    const urlElements = url.split('/');

    return urlElements[urlElements.length - 1];
};
