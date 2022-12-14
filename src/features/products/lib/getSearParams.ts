export function getSearParams(value: string) {
    if (!value) return undefined;

    return { title: value };
}
