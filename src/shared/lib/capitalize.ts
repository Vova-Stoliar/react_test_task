export const capitalize = (string: string) => {
    const [firstLetter, ...restLetters] = string.split('');

    return `${firstLetter.toUpperCase()}${restLetters.join('')}`;
};
